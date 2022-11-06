<?php

namespace App\Twig;

use App\Constants\Template;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class TwigExtension extends AbstractExtension
{
    public function getFunctions(): array
    {
        return [
            new TwigFunction('templateConst', [$this, 'getTemplateConstant'])
        ];
    }

    public function getTemplateConstant(string $constName): string 
    {
        return constant(Template::class . "::$constName");
    }
}