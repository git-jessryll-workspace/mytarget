<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DeleteClientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Client $client, Request $request)
    {
        if ($request->user()->id !== $client->user_id) {
            throw ValidationException::withMessages(['error_message' => "Not Authorized"]);
        }

        $client->delete();

        return redirect()->route('clients.index')->with(['message' => 'Client deleted']);
    }
}
