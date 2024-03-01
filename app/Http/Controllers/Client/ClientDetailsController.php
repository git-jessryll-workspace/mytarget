<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Inertia\Inertia;
use Inertia\Response;

class ClientDetailsController extends Controller
{
    /**
     * @param Client $client
     * @return Response
     */
    public function __invoke(Client $client): \Inertia\Response
    {
        return Inertia::render('Client/Show', ['client' => $client]);
    }
}
