<?php

namespace App\Http\Controllers\ClientProject;

use App\Http\Controllers\Controller;
use App\Models\ClientProject;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowProjectController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ClientProject $clientProject, Request $request)
    {
        $search_query_task = $request->get('search_query_task') ?? "";
        $client = $clientProject->client;
        $acronym = $clientProject->acronym;

        $queryTask = Task::query()
            ->select([
                'tasks.id',
                'tasks.name',
                'tasks.description',
                'tasks.priority_level',
                'tasks.is_archived',
                'tasks.created_at',
                'tasks.updated_at',
                'acronyms.counter',
                'acronyms.acronym',
                'clients.name AS client_name',
                'client_projects.project_name',
                'boards.name AS board_name',
                'boards.id AS board_id',
                'boards.is_hidden AS board_is_hidden',
            ])
            ->leftJoin('acronyms', 'tasks.id', '=', 'acronyms.task_id')
            ->leftJoin('clients', 'tasks.client_id', '=', 'clients.id')
            ->leftJoin('client_projects', 'tasks.client_project_id', '=', 'client_projects.id')
            ->leftJoin('boards', 'tasks.board_id', '=', 'boards.id')
            ->where('tasks.client_project_id', $clientProject->id)
            ->where('tasks.is_archived', false)
            ->where('boards.is_hidden', false);

        if (!empty($search_query_task)) {
            $queryTask->where(function ($q) use ($search_query_task) {
                $q->where('tasks.name', 'LIKE', "%{$search_query_task}%")
                    ->orWhereHas('acronym', function ($q1) use ($search_query_task) {
                        $q1->whereRaw('CONCAT("#",acronym,"-",counter) LIKE ?', ["%$search_query_task%"]);
                    });
            });
        }

        $tasks = $queryTask
            ->orderBy('tasks.priority_level', 'desc')
            ->orderBy('tasks.created_at', 'desc')
            ->paginate(perPage: 50);

        $tasks->appends([
            'search_query_task' => $search_query_task,
            'current_search_tab' => $request->get('current_search_tab')
        ]);

        return Inertia::render('ClientProject/Show', [
            'tasks' => $tasks,
            'client' => $client,
            'acronym' => $acronym,
            'project_client' => $clientProject,
            'search_query_task' => $search_query_task,
            'current_search_tab' => $request->get('current_search_tab') ?? "",
            "primaryId" => $clientProject->id
        ]);
    }
}
