<?php

namespace App\Constants;

/**
 * Represents the two types of Kanban privacy : Public or private.
 */
enum KanbanPrivacy: int
{
    case Public = 0;
    case Private = 1;
}