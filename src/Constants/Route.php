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
}