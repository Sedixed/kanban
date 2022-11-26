<?php

namespace App\DataFixtures;

use DateTime;
use Faker\Factory;
use App\Entity\Task;
use App\Entity\User;
use App\Entity\Column;
use App\Entity\Kanban;
use App\Constants\KanbanPrivacy;
use App\Entity\Invitation;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{    

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        // Create some kanbans
        $nbKanban = 40;
        $maxColumnsPerKanban = 4;
        $maxTasksPerColumn = 5;
        $maxUsersPerKanban = 4;

        $firstKanban = null;

        $def_user = new User();
        

        for ($i = 0; $i < $nbKanban; ++$i) {
            $kanban = new Kanban();

            if ($i == 0) {
                $firstKanban = $kanban;
            }

            $kanban->setName($faker->sentence(6, false))
                ->setPrivacy(mt_rand(0, 1) ? KanbanPrivacy::Public 
                    : KanbanPrivacy::Private);
            
            // Create columns and add them to kanbans
            $nbColumns = mt_rand(2, $maxColumnsPerKanban);
            for ($j = 0; $j < $nbColumns; ++$j) {
                $column = new Column();

                if ($j == 0) {
                    $column->setName("Stories");
                } else if ($j == $nbColumns - 1) {
                    $column->setName("Terminées");
                } else {
                    $column->setName($faker->word());
                }
                $column->setOffset($j)
                    ->setKanban($kanban);

                // Create tasks and add them to column
                for ($k = 0; $k < mt_rand(0, $maxTasksPerColumn); ++$k) {
                    $task = new Task();

                    $task->setName($faker->name())
                        ->setDescription($faker->text(250))
                        ->setKanbanColumn($column);
                    if (mt_rand(0, 1)) {
                        $task->setLimitDate((new DateTime())->modify('+2 day'));
                    }

                    $manager->persist($task);
                }

                $manager->persist($column);
            }
            
            // Add users to kanban
            for ($j = 0; $j < mt_rand(2, $maxUsersPerKanban); ++$j) {
                $user = new User();
                
                $user->setUsername($faker->userName())
                    ->setPlainPassword('password')
                    ->addKanban($kanban)
                    ->setRoles(['ROLE_USER']);
                    
                if ($j == 0) {
                    $kanban->setOwner($user);
                }
                
                $manager->persist($user);
            }

            
            $invitation = new Invitation();
            $invitation->setKanban($kanban)
            ->setUser($def_user);
            $manager->persist($kanban);
            $manager->persist($invitation);
        }
        
        $def_user->setUsername('username')
        ->setPlainPassword('password')
        ->addKanban($firstKanban)
        ->setRoles(['ROLE_USER']);
        $firstKanban->setOwner($def_user)->setPrivacy(KanbanPrivacy::Public);
        $manager->persist($def_user);
        $manager->persist($firstKanban);
        $manager->flush();
    }
}
