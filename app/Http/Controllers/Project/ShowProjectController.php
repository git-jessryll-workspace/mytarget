<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Service\Task\ProjectTaskService;
use App\Models\ClientProject;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowProjectController extends Controller
{
    public function __construct(
        private readonly ProjectTaskService $taskService
    )
    {
    }

    /**
     * @param ClientProject $clientProject
     * @param Request $request
     * @return Response
     */
    public function __invoke(ClientProject $clientProject, Request $request): Response
    {
        $search_query_task = $request->get('search_query_task') ?? "";
        $currentSearchTab = $request->get('current_search_tab') ?? "";

        $clientProjectId = $clientProject->id;
        $client = $clientProject->client;
        $acronym = $clientProject->acronym;

        $appends = [
            'search_query_task' => $search_query_task,
            'current_search_tab' => $currentSearchTab
        ];

        $tasks = $this->taskService->getTasks($clientProjectId, $appends);

        return Inertia::render('ClientProject/Show', [
            'tasks' => $tasks,
            'client' => $client,
            'acronym' => $acronym,
            'project_client' => $clientProject,
            'search_query_task' => $search_query_task,
            'current_search_tab' => $currentSearchTab,
            "primaryId" => $clientProject->id
        ]);
    }
}
