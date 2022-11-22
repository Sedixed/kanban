<?php

namespace App\Controller;

use App\Repository\InvitationRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use App\Constants\Route as RouteConstants;
use App\Constants\Template;

class InvitationController extends AbstractController
{
    #[Route(
        '/invitation/list',
        name: RouteConstants::INVITATION_BY_USER_ROUTE, 
        methods: ['GET', 'POST']
    )]
    public function list(InvitationRepository $repo, UserInterface $user): Response
    {
        $invitations = $repo->findBy(
            ['user' => $user]
        );

        return $this->render(Template::PAGE_INVITATION_BY_USER_LIST, [
            'invitations' => $invitations,
            'user' => $user
        ]);
    }

   
}
