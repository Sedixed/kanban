<?php

namespace App\Exception;

use Exception;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

class FunctionalException extends Exception
{
    /**
     * The Twig template variables values.
     *
     * @var array
     */
    private array $context = [];

    /**
     * The route to redirect when the exception occurs.
     *
     * @var string|null
     */
    private ?string $redirectRoute = null;

    /**
     * FunctionException constructor.
     *
     * @param string         $message       The error message.
     * @param integer        $httpStatus    The HTTP status code of the error.
     * @param array          $context       The Twig template variables values.
     * @param string|null    $redirectRoute The route to redirect (or null).
     * @param Throwable|null $previous      The previous exception (Nullable).
     */
    public function __construct(
        string $message, 
        int $httpStatus = Response::HTTP_INTERNAL_SERVER_ERROR,
        array $context = [],
        ?string $redirectRoute = null,
        Throwable $previous = null
    ) {
        $this->context = $context;
        $this->redirectRoute = $redirectRoute;

        parent::__construct($message, $httpStatus, $previous);
    }

    /**
     * Returns the HTTP status code of the exception.
     *
     * @return integer
     */
    public function getHttpStatus(): int
    {
        return $this->code;
    }

    public function getContext(): array
    {
        return $this->context;
    }

    /**
     * Returns the route to redirect when the exception occurs.
     *
     * @return string|null
     */
    public function getRedirectRoute(): ?string
    {
        return $this->redirectRoute;
    }
}