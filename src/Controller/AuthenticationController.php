<?php

namespace App\Controller;

use App\Constants\Route as RouteConstants;
use App\Constants\Template;
use App\Entity\User;
use App\Form\RegistrationType;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;

class AuthenticationController extends AbstractController
{
    #[Route(
        '/login', 
        name: RouteConstants::LOGIN_ROUTE, 
        methods: ['GET', 'POST']
    )]
    public function login(AuthenticationUtils $authenticationUtils): Response 
    {
        return $this->render(Template::PAGE_LOGIN, [
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError()
        ]);
    }

    #[Route('/logout', name: RouteConstants::LOGOUT_ROUTE, methods: ['GET'])]
    public function logout() {
        // Nothing to do here :)
    }

    #[Route(
        '/register', 
        name: RouteConstants::REGISTER_ROUTE, 
        methods: ['GET', 'POST']
    )]
    public function register(Request $request, EntityManagerInterface $manager)
        : Response 
    {
        $user = new User();
        $user->setRoles(['ROLE_USER']);
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            $this->addFlash('success', 'Inscription réalisée avec succès !');

            $manager->persist($user);
            $manager->flush();

            return $this->redirectToRoute(RouteConstants::LOGIN_ROUTE);
        }

        return $this->render(Template::PAGE_REGISTER, [
            'form' => $form->createView()
        ]);
    }
}
