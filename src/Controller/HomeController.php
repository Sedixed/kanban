<?php

namespace App\Controller;

use App\Constants\Template;
use App\Constants\KanbanPrivacy;
use App\Repository\KanbanRepository;
use App\Constants\Route as RouteConstants;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

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
