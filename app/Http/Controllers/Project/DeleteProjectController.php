<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Service\ClientProject\ProjectService;
use App\Models\ClientProject;
use Illuminate\Http\Request;

class DeleteProjectController extends Controller
{
    /**
     * @param ProjectService $projectService
     */
    public function __construct(
        private readonly ProjectService $projectService
    )
    {
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(ClientProject $clientProject, Request $request)
    {
        $client = $clientProject->client;

        if ($client->user_id !== auth()->id()) {
            return redirect()->back()->withErrors([
                'error_message' => 'Not authorized'
            ]);
        }
        $this->projectService->delete($clientProject->id);
        return redirect()->back();
    }
}
