<?php

namespace App\Controller;

use App\Constants\KanbanPrivacy;
use App\Constants\Route as RouteConstants;
use App\Constants\Template;
use App\Exception\FunctionalException;
use App\Repository\KanbanRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomeController extends AbstractController {

    #[Route('/', name: RouteConstants::HOME_ROUTE, methods: ['GET'])]
    public function index(KanbanRepository $repo): Response {
        $kanbans = $repo->findBy(
            ['privacy' => KanbanPrivacy::Public],
            ['name' => 'ASC']
        );

        return $this->render(Template::PAGE_HOME, [
            'kanbans' => $kanbans
        ]);
    }
}
