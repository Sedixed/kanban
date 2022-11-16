<?php

namespace App\Constants;

class Template {
    /** 
     * Root folder for partials templates.
     * 
     * @var string
     */
    const PARTIALS_BASE = "/partials/";

    /**
     * Header template's path.
     * 
     * @var string
     */
    const PARTIAL_HEADER = self::PARTIALS_BASE . "_header.html.twig";

    const PARTIAL_SIDEBAR = self::PARTIALS_BASE . "_sidebar.html.twig";

    /**
     * Root folder for pages templates.
     * 
     * @var string
     */
    const PAGES_BASE = "/pages/";

    /**
     * Home page template's path.
     * 
     * @var string
     */
    const PAGE_HOME = self::PAGES_BASE . "home/index.html.twig";

    /**
     * Register page template's path.
     * 
     * @var string
     */
    const PAGE_REGISTER = self::PAGES_BASE . "authentication/register.html.twig";

    /**
     * Login page template's path.
     * 
     * @var string
     */
    const PAGE_LOGIN = self::PAGES_BASE . "authentication/login.html.twig";

    /**
     * Kanban creation page template's path.
     * 
     * @var string
     */
    const PAGE_KANBAN_CREATION = self::PAGES_BASE . "kanban/create.html.twig";
}