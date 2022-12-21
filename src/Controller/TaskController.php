<?php

namespace App\Controller;

use DateTime;
use App\Entity\Task;
use App\Constants\Template;

use App\Service\KanbanService;
use App\Repository\TaskRepository;
use App\Repository\UserRepository;
use App\Repository\ColumnRepository;
use App\Exception\FunctionalException;
use Doctrine\ORM\EntityManagerInterface;
use App\Constants\Route as RouteConstants;
use App\Entity\Column;
use App\Entity\User;
use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\User\UserInterface;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\IsGranted;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

class TaskController extends AbstractController
{
    #[Route(
        '/task/list',
        name: RouteConstants::TASK_BY_USER_ROUTE, 
        methods: ['GET']
    )]
    #[IsGranted("ROLE_USER")]
    public function list(TaskRepository $repo, UserInterface $user): Response {
        $user_tasks = $repo->findBy(
            ['user' => $user],
            ['limit_date' => 'ASC']
        );

        foreach ($user_tasks as $task) {
            $task->kanban = $repo->getKanban($task);
        }

        return $this->render(Template::PAGE_TASK_BY_USER_LIST, [
            'tasks' => $user_tasks,
            'user' => $user
        ]);
    }

    #[Route(
        '/task/accept',
        name: RouteConstants::TASK_ACCEPT_ROUTE, 
        methods: ['POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function accept(Request $request, TaskRepository $repo, UserInterface $user, EntityManagerInterface $manager): Response
    {   
        if (!$request->isXmlHttpRequest()) {
            throw new FunctionalException("La requête est invalide", Response::HTTP_BAD_REQUEST);
        }

        $params = json_decode($request->getContent(), true);
        if (!isset($params['taskId'])) {
            throw new FunctionalException("Paramètre de requête manquant", Response::HTTP_NOT_FOUND);
        }

        // Verifies that the task exists
        $task = $repo->findOneBy(
            ['id' => $params['taskId']]
        );

        if ($task == null) {
            throw new FunctionalException("Identifiant invalide", Response::HTTP_NOT_FOUND);
        }

        // Verifies that the user is affected to the kanban
        $kanban = $repo->getKanban($task);
        if ($kanban->getOwner() != $user && !$kanban->getUsers()->contains($user)) {
            throw new FunctionalException("Utilisateur non membre du Kanban", Response::HTTP_NOT_FOUND);
        }
        
        // Verifies that the task is not already affected
        if ($task->getUser() != null) {
            throw new FunctionalException(
                "Tache deja affectee", 
                Response::HTTP_NOT_FOUND
            );
        }

        if ($user instanceof User) {
            $user->addTask($task);
        }
        $manager->persist($user);
        $manager->persist($task);
        $manager->flush();

        return new JsonResponse([
            'name' => ($user instanceof User) ? $user->getUsername() : null
        ]);
    }

    #[Route(
        '/task/affect',
        name: RouteConstants::TASK_AFFECT_ROUTE, 
        methods: ['POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function affect(Request $request, TaskRepository $repo, UserRepository $user_repo, UserInterface $owner, EntityManagerInterface $manager): Response
    {   
        if (!$request->isXmlHttpRequest()) {
            throw new FunctionalException("La requête est invalide", Response::HTTP_BAD_REQUEST);
        }

        $params = json_decode($request->getContent(), true);
        if (!isset($params['taskId']) || !isset($params['userId'])) {
            throw new FunctionalException("Paramètre de requête manquant", Response::HTTP_NOT_FOUND);
        }

        // Verifies that the task exists
        $task = $repo->findOneBy(
            ['id' => $params['taskId']]
        );
        if ($task == null) {
            throw new FunctionalException("Identifiant invalide", Response::HTTP_NOT_FOUND);
        }

        // Verifies that the user exists
        $user = $user_repo->findOneBy(
            ['id' => $params['userId']]
        );
        if ($user == null) {
            throw new FunctionalException("Utilisateur invalide", Response::HTTP_NOT_FOUND);
        }

        // Verifies that the user is affected to the kanban
        $kanban = $repo->getKanban($task);
        if (!$kanban->getUsers()->contains($user)) {
            throw new FunctionalException("Utilisateur non membre du Kanban", Response::HTTP_NOT_FOUND);
        }
        
        // Verifies that the owner has sent the request
        if ($owner != $kanban->getOwner()) {
            throw new FunctionalException("Impossible d'affecter une tâche sans être propriétaire du Kanban", Response::HTTP_NOT_FOUND);
        }
    
        $user->addTask($task);
        $manager->persist($user);
        $manager->persist($task);
        $manager->flush();
        
        return new JsonResponse(['name' => $user->getUsername()]);
    }

    #[Route(
        '/task/create_under/{id}',
        name: RouteConstants::TASK_CREATE_ROUTE, 
        methods: ['POST']
    )]
    #[IsGranted("ROLE_USER")]
    public function create(Request $request, EntityManagerInterface $manager, ColumnRepository $repo, int $id) : Response 
    {
        $column = $repo->findOneBy([
            'id' => $id
        ]);

        if ($column == null) {
            $this->addFlash('error', 'Erreur lors de la création : colonne introuvable');
            return $this->redirectToRoute(RouteConstants::HOME_ROUTE);
        }

        $name = $request->get('name');
        if ($name == null || strlen($name) > 255 || strlen($name) < 3) {
            $this->addFlash('error', 'Erreur lors de la création : nom invalide');
            return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
                'id' => $column->getKanban()->getId()
            ]);
        }

        $desc = $request->get('description');
        if ($desc == null || strlen($desc) > 500 || strlen($desc) < 3) {
            $this->addFlash('error', 'Erreur lors de la création : description invalide');
            return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
                'id' => $column->getKanban()->getId()
            ]);
        }

        $dateStr = $request->get('limitDate');
        if ($dateStr === null) {
            $this->addFlash('error', 'Erreur lors de la création : date invalide');
            return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
                'id' => $column->getKanban()->getId()
            ]);
        }

        $date = null;
        if ($dateStr != "") {
            $date = new DateTime($dateStr);
        }

        $task = new Task();
        $task->setName($name)
            ->setDescription(htmlspecialchars($desc))
            ->setLimitDate($date)
            ->setKanbanColumn($column);

        $this->addFlash('success', 'Tâche ajoutée avec succès !');

        $manager->persist($task);
        $manager->flush();
        
        return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
            'id' => $column->getKanban()->getId()
        ]);
    }

    #[Route(
        '/task/delete/{id}',
        name: RouteConstants::TASK_DELETE_ROUTE, 
        methods: ['GET']
    )]
    #[IsGranted("ROLE_USER")]
    public function delete(EntityManagerInterface $manager, TaskRepository $repo, int $id, UserInterface $user) : Response 
    {
        $task = $repo->findOneBy([
            'id' => $id
        ]);

        if ($task == null) {
            $this->addFlash('error', 'Erreur lors de la suppression : tâche introuvable');
            return $this->redirectToRoute(RouteConstants::HOME_ROUTE);
        }

        $kanban = $task->getKanbanColumn()->getKanban();

        if ($user != $kanban->getOwner()) {
            $this->addFlash('error', 'Erreur lors de la suppression : seul le propriétaire peut effectuer cette action');
            return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
                'id' => $kanban->getId()
            ]);
        }

        $manager->remove($task);
        $manager->flush();
        
        return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
            'id' => $kanban->getId()
        ]);
    }

    #[Route(
        '/task/move/{id}/{to}',
        name: RouteConstants::TASK_MOVE_ROUTE, 
        methods: ['GET']
    )]
    #[IsGranted("ROLE_USER")]
    public function move(int $id, int $to, TaskRepository $taskRepository, EntityManagerInterface $manager, ColumnRepository $columnRepository): Response {
        $task = $taskRepository->findOneBy(compact("id"));
        if ($task === null) {
            $this->addFlash("error", "La tâche est invalide");
            return $this->redirectToRoute(RouteConstants::HOME_ROUTE);
        }

        $kanban = $task->getKanbanColumn()->getKanban();
        $columnTo = $columnRepository->findOneBy(["id" => $to]);
        if (
            $columnTo === null 
            || $columnTo->getKanban()->getId() != $kanban->getId()
        ) {
            $this->addFlash("error", "La colonne d'arrivée est invalide");
            return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
                "id" => $kanban->getId()
            ]);
        }

        $task->setKanbanColumn($columnTo);
        
        $manager->persist($task);
        $manager->flush();

        return $this->redirectToRoute(RouteConstants::KANBAN_ROUTE, [
            "id" => $kanban->getId()
        ]);
    }

}
