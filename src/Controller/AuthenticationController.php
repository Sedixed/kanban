<?php

namespace App\Controller;

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
    #[Route('/login', name: 'authentication.login', methods: ['GET', 'POST'])]
    public function login(AuthenticationUtils $authenticationUtils): Response {

        return $this->render('/home/authentication/login.html.twig', [
            'last_username' => $authenticationUtils->getLastUsername(),
            'error' => $authenticationUtils->getLastAuthenticationError()
        ]);
    }

    #[Route('/logout', name: 'authentication.logout')]
    public function logout() {
        // Nothing to do here :)
    }

    #[Route('/register', name: 'authentication.register', methods: ['GET', 'POST'])]
    public function register(Request $request, EntityManagerInterface $manager): Response {

        $user = new User();
        $user->setRoles(['ROLE_USER']);
        $form = $this->createForm(RegistrationType::class, $user);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $user = $form->getData();

            $this->addFlash('success', 'Inscription réalisée avec succès !');

            $manager->persist($user);
            $manager->flush();

            return $this->redirectToRoute('authentication.login');

        }

        return $this->render('/home/authentication/register.html.twig', [
            'form' => $form->createView()
        ]);
    }
}
