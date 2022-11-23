<?php

namespace App\Service;

use Twig\Environment;

/**
 * This service allows us to manipulate Twig templates.
 */
class TwigService
{
    /**
     * Twig API, allows us to manipulate Twig templates.
     *
     * @var Environment
     */
    private Environment $twig;

    public function __construct(Environment $twig)
    {
        $this->twig = $twig;
    }

    /**
     * Load the Twig template at the given path and returns it's content.
     *
     * @param  string $path       The path of the Twig template. If set to null,
     *                            null is returned
     * @param  array  $parameters The template's parameters.
     * @return string             The template's content or null if path is 
     *                            null.
     */
    public function getTemplateContent(
        ?string $path, 
        array $parameters = []
    ): ?string
    {
        if ($path == null) {
            return null;
        }

        // Throw an exception if the path is invalid
        $content = $this->twig->render($path, $parameters);

        return $content;
    }
}