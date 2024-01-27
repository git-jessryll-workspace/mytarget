<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientProject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowClientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Client $client, Request $request)
    {
        $projects = ClientProject::query()->where('client_id', $client->id)->orderBy('active', 'desc')->orderBy('updated_at', 'desc')->paginate(10);
        return Inertia::render('Client/Show', ['client' => $client, 'projects' => $projects]);
    }
}
