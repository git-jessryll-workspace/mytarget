<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientDetailsController extends Controller
{
    public function __invoke(Client $client)
    {
        return Inertia::render('Client/Show', ['client' => $client]);
    }
}
