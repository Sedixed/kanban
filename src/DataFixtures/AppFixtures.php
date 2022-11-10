<?php

namespace App\DataFixtures;

use DateTime;
use Faker\Factory;
use App\Entity\Task;
use App\Entity\User;
use App\Entity\Column;
use App\Entity\Kanban;
use App\Constants\KanbanPrivacy;
use Doctrine\Persistence\ObjectManager;
use Doctrine\Bundle\FixturesBundle\Fixture;

class AppFixtures extends Fixture
{    

    public function load(ObjectManager $manager): void
    {
        $faker = Factory::create();

        // Create some kanbans
        $nbKanban = 15;
        $maxColumnsPerKanban = 4;
        $maxTasksPerColumn = 2;
        $maxUsersPerKanban = 4;
        for ($i = 0; $i < $nbKanban; ++$i) {
            $kanban = new Kanban();

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

            $manager->persist($kanban);
        }

        $manager->flush();
    }
}
