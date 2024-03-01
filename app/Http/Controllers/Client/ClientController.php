<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Service\Client\GeneralClientService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ClientController extends Controller
{
    /**
     * @param GeneralClientService $clientService
     */
    public function __construct(
        private readonly GeneralClientService $clientService
    )
    {
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): \Inertia\Response
    {
        $searchQuery = $request->get('search_query') ?? "";
        $clients = $this->clientService
            ->getClients(['search_query' => $searchQuery]);

        return Inertia::render('Client', [
            'clients' => $clients,
            'search_query' => $searchQuery
        ]);
    }
}
