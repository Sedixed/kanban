<?php

namespace App\Twig;

use Twig\TwigFunction;
use App\Constants\Route;
use App\Constants\Template;
use Twig\Extension\AbstractExtension;

class TwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('templateConst', [$this, 'getTemplateConstant']),
            new TwigFunction('routeConst', [$this, 'getRouteConstant'])
        ];
    }

    // Twig functions 
    public function getTemplateConstant(string $constName): string 
    {
        return constant(Template::class . "::$constName");
    }

    public function getRouteConstant(string $constName): string 
    {
        return constant(Route::class . "::$constName");
    }
}