<?php

namespace App\Controller;

use App\Entity\Column;
use App\Entity\Kanban;
use App\Constants\Template;
use App\Constants\KanbanPrivacy;
use App\Form\KanbanCreationType;
use App\Repository\KanbanRepository;
use App\Exception\FunctionalException;
use Doctrine\ORM\EntityManagerInterface;
use App\Constants\Route as RouteConstants;
use App\Service\KanbanService;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\User\UserInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class KanbanController extends AbstractController
{
    #[Route(
        '/kanban/create', 
        name: RouteConstants::KANBAN_CREATE_ROUTE, 
        methods: ['GET', 'POST']
    )]
    #[IsGranted("ROLE_USER")]
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

    #[Route(
        '/kanban/get/{id}', 
        name: RouteConstants::KANBAN_ROUTE, 
        methods: ['GET', 'POST']
    )]
    public function view(KanbanRepository $repo, int $id, KanbanService $service, ?UserInterface $user = null): Response {
        $kanban = $repo->findOneBy(['id' => $id]);
        if ($kanban == null) {
            $this->addFlash('error', 'Kanban introuvable');
            return $this->redirectToRoute(RouteConstants::HOME_ROUTE);
        }

        if ($kanban->getPrivacy() == KanbanPrivacy::Private) {
            if ($user == null) {
                return $this->redirectToRoute(RouteConstants::LOGIN_ROUTE);
            }
            if (!($user == $kanban->getOwner() || $kanban->getUsers()->contains($user))) {
                return $this->redirectToRoute(RouteConstants::HOME_ROUTE);
            }
        }

        $maxTasks = $service->getMaxTasksAmount($kanban);

        return $this->render(Template::PAGE_KANBAN_VIEW, [
            "kanban" => $kanban,
            "maxTasks" => $maxTasks
        ]);
    }

    #[Route(
        '/kanban/list',
        name: RouteConstants::KANBAN_BY_USER_ROUTE, 
        methods: ['GET']
    )]
    #[IsGranted("ROLE_USER")]
    public function list(KanbanRepository $repo, UserInterface $user): Response {
        $kanbans_owned = $repo->findBy(
            ['owner' => $user]
        );

        $kanbans_invited = $repo->getInvitedKanbans($user);

        return $this->render(Template::PAGE_KANBAN_BY_USER_LIST, [
            'kanbans_owned' => $kanbans_owned,
            'kanbans_invited' => $kanbans_invited,
            'user' => $user
        ]);
    }
}
