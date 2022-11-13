<?php

namespace App\Controller;

use App\Entity\Column;
use App\Entity\Kanban;
use App\Constants\Template;
use App\Form\KanbanCreationType;
use Doctrine\ORM\EntityManagerInterface;
use App\Constants\Route as RouteConstants;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Common\Collections\ArrayCollection;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\User\UserInterface;

class KanbanController extends AbstractController
{
    #[Route(
        '/kanban/create', 
        name: RouteConstants::KANBAN_CREATE_ROUTE, 
        methods: ['GET', 'POST']
    )]
    public function create(Request $request, EntityManagerInterface $manager, UserInterface $user)
        : Response 
    {
        $kanban = new Kanban();
        $form = $this->createForm(KanbanCreationType::class, $kanban);

        $form->handleRequest($request);
        if ($form->isSubmitted() && $form->isValid()) {
            $kanban = $form->getData();
            $kanban->unsetColumns();
            $columns = $form->get('columns')->getData();
            
            $kanban->addColumn(new Column('Stories', 0));
            foreach ($columns as $i => $column) {
                $kanban->addColumn(new Column($column, $i + 1));
            }
            $kanban->addColumn(new Column('Terminées', count($columns) + 1));

            $this->addFlash('success', 'Kanban créé avec succès !');

            $kanban->setOwner($user);

            $manager->persist($kanban);
            $manager->flush();

            return $this->redirectToRoute(RouteConstants::HOME_ROUTE);
        }

        return $this->render(Template::PAGE_KANBAN_CREATION, [
            'form' => $form->createView()
        ]);
    }
}
