<?php

namespace App\Service;

use App\Entity\Kanban;

/**
 * This service allows us to factorize some calls for the Kanban entity.
 */
class KanbanService
{   
    /**
     * Calculates and returns the highest amount of tasks from all kanban's columns.
     * It is used for the kanban table rendering.
     * 
     * @param kanban The kanban we are calculating the amount of tasks for.
     */
    public function getMaxTasksAmount(Kanban $kanban) : int {
        $maxTasks = 0;
        foreach ($kanban->getColumns() as $column) {
            $nbTasks = count($column->getTasks());
            if ($nbTasks > $maxTasks) {
                $maxTasks = $nbTasks;
            }
        }
        return $maxTasks;
    }
}