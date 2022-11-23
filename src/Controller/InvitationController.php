<?php

namespace App\Controller;

use App\Constants\Template;
use App\Exception\FunctionalException;
use App\Repository\InvitationRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Constants\Route as RouteConstants;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\User\UserInterface;
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
}
