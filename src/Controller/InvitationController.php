<?php

namespace App\Controller;

use App\Constants\Template;
use App\Form\UserInvitationType;
use App\Repository\UserRepository;
use App\Repository\KanbanRepository;
use App\Exception\FunctionalException;
use App\Repository\InvitationRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Constants\Route as RouteConstants;
use App\Entity\Invitation;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\User\UserInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class InvitationController extends AbstractController
{   
    #[Route(
        '/invitation/list',
        name: RouteConstants::INVITATION_BY_USER_ROUTE, 
        methods: ['GET', 'POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function list(UserInterface $user): Response
    {   
        return $this->render(Template::PAGE_INVITATION_BY_USER_LIST, [
            'user' => $user
        ]);
    }

    #[Route(
        '/invitation/accept',
        name: RouteConstants::INVITATION_ACCEPT_ROUTE, 
        methods: ['POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function accept(Request $request, InvitationRepository $repo, EntityManagerInterface $manager): Response
    {   
        if (!$request->isXmlHttpRequest()) {
            throw new FunctionalException("La requête est invalide", Response::HTTP_BAD_REQUEST);
        }

        $params = json_decode($request->getContent(), true);
        $invitation = $repo->findOneBy(
            ['id' => $params['id']]
        );

        if ($invitation == null) {
            throw new FunctionalException("L'invitation est invalide", Response::HTTP_NOT_FOUND);
        }
        
        $invitation->getKanban()->addUser($invitation->getUser());
        $manager->remove($invitation);
        $manager->flush();
        
        return new JsonResponse([]);
    }

    #[Route(
        '/invitation/reject',
        name: RouteConstants::INVITATION_REJECT_ROUTE, 
        methods: ['POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function reject(Request $request, InvitationRepository $repo, EntityManagerInterface $manager): Response
    {   
        if (!$request->isXmlHttpRequest()) {
            throw new FunctionalException("La requête est invalide", Response::HTTP_BAD_REQUEST);
        }

        $params = json_decode($request->getContent(), true);
        $invitation = $repo->findOneBy(
            ['id' => $params['id']]
        );
        
        if ($invitation == null) {
            throw new FunctionalException("L'invitation est invalide", Response::HTTP_NOT_FOUND);
        }
    
        $manager->remove($invitation);
        $manager->flush();
        
        return new JsonResponse([]);
    } 

    #[Route(
        '/invitation/send/{id}',
        name: RouteConstants::INVITATION_SEND_ROUTE, 
        methods: ['POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function send(Request $request, KanbanRepository $repo, UserRepository $user_repo, int $id, EntityManagerInterface $manager): Response
    {   
        $kanban = $repo->findOneBy(['id' => $id]);
        $username = $request->get('username');
        if ($username != null) {
            $user = $user_repo->findOneBy(['username' => $username]);

            if ($user != null) {
                if ($kanban->getOwner() == $user) {
                    $this->addFlash('warning', 'Vous ne pouvez pas vous inviter vous même sur le Kanban.');
                } else if ($kanban->getUsers()->contains($user)) {
                    $this->addFlash('warning', 'L\'utilisateur est déjà présent sur le Kanban.');
                } else {
                    $warn = false;
                    foreach ($kanban->getInvitations() as $invitation) {
                        if ($invitation->getUser() == $user) {
                            $this->addFlash('warning', 'L\'utilisateur est déjà invité sur le Kanban.');
                            $warn = true;
                            break;
                        }
                    }
                    if (!$warn) {
                        $invitation = new Invitation();
                        $invitation->setKanban($kanban)->setUser($user);
                        $manager->persist($invitation);
                        $manager->flush();
                        $this->addFlash('success', 'Utilisateur invité avec succès !');
                    } 
                }
            } else {
                $this->addFlash('error', 'L\'utilisateur est introuvable.');
            }
        } else {
            $this->addFlash('error', 'L\'utilisateur transmis via le formulaire est incorrect.');
        }
    
        

        return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
            "kanban" => $kanban,
            "id" => $kanban->getId()
        ]);
    }
}
