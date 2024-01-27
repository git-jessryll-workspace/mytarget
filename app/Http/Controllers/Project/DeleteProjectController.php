<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientProject;
use Illuminate\Http\Request;

class DeleteProjectController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ClientProject $clientProject, Request $request)
    {
        $client = Client::query()
            ->where('id', $clientProject->client_id)
            ->first();

        if ($client->user_id !== auth()->id()) {
            return redirect()->back()->withErrors([
                'error_message' => 'Not authorized'
            ]);
        }
        $clientProject->delete();
        return redirect()->back();
    }
}
