<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Service\Contact\GeneralContactService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ContactController extends Controller
{
    /**
     * @param GeneralContactService $contactService
     */
    public function __construct(
        private readonly GeneralContactService $contactService
    )
    {
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $searchQuery = $request->get('search_query') ?? "";
        $contacts = $this->contactService->getContacts([
            'search_query' => $searchQuery
        ]);
        return Inertia::render('Contact', [
            'contacts' => $contacts,
            'search_query' => $searchQuery
        ]);
    }
}
