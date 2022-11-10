<?php

namespace App\Constants;

class RouteToTemplate
{
    /**
     * Associate each route to the associated template.
     * 
     * @var array
     */
    private const ROUTE_TO_TEMPLATE = [
        Route::HOME_ROUTE          => Template::PAGE_HOME,
        Route::LOGIN_ROUTE         => Template::PAGE_LOGIN,
        Route::REGISTER_ROUTE      => Template::PAGE_REGISTER,
        Route::KANBAN_CREATE_ROUTE => Template::PAGE_KANBAN_CREATION
    ];

    /**
     * Returns the template path associated to the given route name.
     *
     * @param  string $route The route name.
     * @return string        The associated template path
     */
    public static function getTemplateByRoute(string $route): ?string
    {
        return self::ROUTE_TO_TEMPLATE[$route];
    }
}