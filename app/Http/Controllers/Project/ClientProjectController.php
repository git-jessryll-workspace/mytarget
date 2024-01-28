<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\ClientProjectRequest;
use App\Models\ClientProject;
use Illuminate\Http\Request;

class ClientProjectController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ClientProjectRequest $request)
    {
        $clientId = $request->validated('client_id');

        $query = ClientProject::query()
            ->where('client_id', $clientId);

        $projects = $query->paginate(50);

        return response()->json([
            'projects' => $projects
        ]);
    }
}
