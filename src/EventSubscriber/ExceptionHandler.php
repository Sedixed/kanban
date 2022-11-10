<?php

namespace App\EventSubscriber;

use App\Constants\RouteToTemplate;
use App\Exception\FunctionalException;
use App\Service\TwigService;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpKernel\KernelEvents;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;

/**
 * This event subscriber catch all the exceptions and handle the ones it's 
 * supposed to handle.
 */
class ExceptionHandler implements EventSubscriberInterface 
{
    /**
     * Twig services, allows us to render templates in response.
     *
     * @var TwigService
     */
    private TwigService $twigService;

    public function __construct(TwigService $twigService)
    {
        $this->twigService = $twigService;
    }

    /**
     * Returns all the subscribed events to this event subscriber and the method
     * associated to each event.
     */
    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => 'processException'
        ];
    }

    /**
     * Process the exceptions.
     *
     * @param  ExceptionEvent $event
     * @return void
     */
    public function processException(ExceptionEvent $event)
    {
        // Check the exception type
        $exception = $event->getThrowable();
        if ($exception instanceof FunctionalException) {
            // If it's a FunctionalException then we handle it
            $this->processFunctionalException($event, $exception);
            return;
        }
        // Otherwise if it's an other type of exception we handle it differently
        $this->processOtherException($event);
    }

    public function processFunctionalException(
        ExceptionEvent $event, 
        FunctionalException $exception
    ) {
        // Get the template content
        $redirectRoute = $exception->getRedirectRoute() 
            ?? $event->getRequest()->get("_route");
        $content = $this->twigService->getTemplateContent(
            // Get the template path
            RouteToTemplate::getTemplateByRoute($redirectRoute),
            // Merge the default error params and the exception context
            array_merge(
                [
                    "error" => true,
                    "errorMessage" => $exception->getMessage()
                ], 
                $exception->getContext()
            )
        );

        $response = new Response();
        $response->setContent($content);
        $response->setStatusCode($exception->getHttpStatus());

        $event->setResponse($response);
    }

    public function processOtherException(ExceptionEvent $event)
    {
        // In production environment, the error is not handled
        if ($_ENV["APP_ENV"] == "prod") {
            // TODO : Redirect to 500 or 404 error page
        }
    }
}