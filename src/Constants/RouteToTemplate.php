<?php

namespace App\Constants;

/**
 * Associate the app routes with their templates. 
 */
class RouteToTemplate
{
    /**
     * Associate each route to the associated template.
     * 
     * @var array
     */
    private const ROUTE_TO_TEMPLATE = [
        Route::HOME_ROUTE               => Template::PAGE_HOME,
        Route::LOGIN_ROUTE              => Template::PAGE_LOGIN,
        Route::REGISTER_ROUTE           => Template::PAGE_REGISTER,
        Route::KANBAN_CREATE_ROUTE      => Template::PAGE_KANBAN_CREATION,
        Route::KANBAN_ROUTE             => Template::PAGE_KANBAN_VIEW,
        Route::KANBAN_BY_USER_ROUTE     => Template::PAGE_KANBAN_BY_USER_LIST,
        Route::INVITATION_BY_USER_ROUTE => Template::PAGE_INVITATION_BY_USER_LIST,
        Route::INVITATION_SEND_ROUTE    => Template::PAGE_KANBAN_VIEW,
        Route::TASK_BY_USER_ROUTE       => Template::PAGE_TASK_BY_USER_LIST
    ];

    /**
     * Returns the template path associated to the given route name. If the 
     * route is invalid, then it returns null.
     *
     * @param  string $route The route name.
     * @return string        The associated template path or null if the route 
     *                       is invalid.
     */
    public static function getTemplateByRoute(string $route): ?string
    {
        if (!array_key_exists($route, self::ROUTE_TO_TEMPLATE)) {
            return null;
        }

        return self::ROUTE_TO_TEMPLATE[$route];
    }
}