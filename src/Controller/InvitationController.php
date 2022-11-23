<?php

namespace App\Controller;

use App\Constants\Template;
use App\Repository\InvitationRepository;
use Doctrine\ORM\EntityManagerInterface;
use App\Constants\Route as RouteConstants;
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
    public function list(Request $request, InvitationRepository $repo, UserInterface $user, EntityManagerInterface $manager): Response
    {   
        // Handle XML HTTP requests (AjaX)
        if ($request->isXmlHttpRequest()) {
            $params = json_decode($request->getContent(), true);
            switch ($params['action']) {
                case 'accept':
                    return $this->accept($params, $repo, $manager);
                    break;
                case 'reject':
                    return $this->reject($params, $repo, $manager);
                    break;
                default:
                    // handle error case
                    return new JsonResponse($params);
                    break;
            }
        }

        return $this->render(Template::PAGE_INVITATION_BY_USER_LIST, [
            'user' => $user
        ]);
    }


    public function accept($params, InvitationRepository $repo, EntityManagerInterface $manager): Response
    {   
        $invitation = $repo->findOneBy(
            ['id' => $params['id']]
        );

        if ($invitation == null) {
            // handle error case
        }
        
        $invitation->getKanban()->addUser($invitation->getUser());
        $manager->remove($invitation);
        $manager->flush();
        
        return new JsonResponse([]);
        
    }

    public function reject($params, InvitationRepository $repo, EntityManagerInterface $manager): Response
    {   
        $invitation = $repo->findOneBy(
            ['id' => $params['id']]
        );
        
        if ($invitation == null) {
            // handle error case
        }
    
        $manager->remove($invitation);
        $manager->flush();
        
        return new JsonResponse([]);
    }   
}
