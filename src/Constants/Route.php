<?php

namespace App\Constants;

class Route {
    /**
     * Home index route.
     * 
     * @var string
     */
    const HOME_ROUTE = "home.index";

    /**
     * Authentication login route.
     * 
     * @var string
     */
    const LOGIN_ROUTE = "authentication.login";

    /**
     * Register login route.
     * 
     * @var string
     */
    const REGISTER_ROUTE = "authentication.register";

    /**
     * Logout login route.
     * 
     * @var string
     */
    const LOGOUT_ROUTE = "authentication.logout";

    /**
     * Kanban creation route.
     * 
     * @var string
     */
    const KANBAN_CREATE_ROUTE = "kanban.create";

    /**
     * Kanban route.
     * 
     * @var string
     */
    const KANBAN_ROUTE = "kanban.view";

    /**
     * Kanban by user route.
     * 
     * @var string
     */
    const KANBAN_BY_USER_ROUTE = "kanban.user.list";

    /**
     * Invitations of a user route.
     * 
     * @var string
     */
    const INVITATION_BY_USER_ROUTE = "invitation.user.list";

    /**
     * Invitations acceptation route.
     * 
     * @var string
     */
    const INVITATION_ACCEPT_ROUTE = "invitation.accept";

    /**
     * Invitations rejection route.
     * 
     * @var string
     */
    const INVITATION_REJECT_ROUTE = "invitation.reject";

    /**
     * Invitations sending route.
     * 
     * @var string
     */
    const INVITATION_SEND_ROUTE = "invitation.send";

    /**
     * Tasks of a user route.
     * 
     * @var string
     */
    const TASK_BY_USER_ROUTE = "task.user.list";

    /**
     * Tasks acceptation route.
     * 
     * @var string
     */
    const TASK_ACCEPT_ROUTE = "task.accept";

    /**
     * Tasks affectation route.
     * 
     * @var string
     */
    const TASK_AFFECT_ROUTE = "task.affect";

    /**
     * Tasks move route.
     * 
     * @var string
     */
    const TASK_MOVE_ROUTE = "task.move";

    /**
     * Tasks creation route.
     * 
     * @var string
     */
    const TASK_CREATE_ROUTE = "task.create";

    /**
     * Tasks deletion route.
     * 
     * @var string
     */
    const TASK_DELETE_ROUTE = "task.delete";
}