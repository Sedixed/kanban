<?php

namespace App\Constants;

class Template {

    /** 
     * Root folder for partials templates
     */
    const PARTIALS_BASE = "/partials/";

    /**
     * Header template's path
     */
    const PARTIAL_HEADER = self::PARTIALS_BASE . "_header.html.twig";

    /**
     * Root folder for pages templates
     */
    const PAGES_BASE = "/pages/";

    /**
     * Home page template's path
     */
    const PAGE_HOME = self::PAGES_BASE . "home/index.html.twig";

    /**
     * Register page template's path
     */
    const PAGE_REGISTER = self::PAGES_BASE . "authentication/register.html.twig";

    /**
     * Login page template's path
     */
    const PAGE_LOGIN = self::PAGES_BASE . "authentication/login.html.twig";

}