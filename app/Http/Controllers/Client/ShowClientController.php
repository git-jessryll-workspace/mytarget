<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientContact;
use App\Models\ClientProject;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowClientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Client $client, Request $request)
    {
        $search_query_project = $request->get('search_query_project') ?? '';
        $search_query_contact = $request->get('search_query_contact') ?? '';
        $search_query_task = $request->get('search_query_task') ?? '';

        $queryContact = ClientContact::query()->select([
            'client_contacts.client_id',
            'client_contacts.contact_id',
            'contacts.id',
            'contacts.name',
            'contacts.email',
            'contacts.contact_number',
            'client_contacts.created_at',
        ])
            ->leftJoin('contacts', 'client_contacts.contact_id', '=', 'contacts.id');

        $queryProject = ClientProject::query()
            ->where('client_id', $client->id);

        $queryTask = Task::query()->select([
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
            'boards.name AS board_name'
        ])
            ->leftJoin('acronyms', 'tasks.id', '=', 'acronyms.task_id')
            ->leftJoin('clients', 'tasks.client_id', '=', 'clients.id')
            ->leftJoin('client_projects', 'tasks.client_project_id', '=', 'client_projects.id')
            ->leftJoin('boards', 'tasks.board_id', '=', 'boards.id')
            ->where('tasks.is_archived', false);

        if ($search_query_project !== "") {
            $queryProject->where('project_name', 'LIKE', "%{$search_query_project}%");
        }

        if ($search_query_contact !== "") {
            $queryContact->where(function ($q) use ($search_query_contact) {
                $q->where('contacts.name', 'LIKE', "%{$search_query_contact}%")
                    ->orWhere('contacts.email', 'LIKE', "%{$search_query_contact}%");
            });
        }

        if ($search_query_task !== "") {
            $queryTask->where('tasks.name', 'LIKE', "%{$search_query_task}%");
        }

        $tasks = $queryTask
            ->orderBy('tasks.priority_level', 'desc')
            ->orderBy('tasks.updated_at', 'desc')
            ->paginate(perPage: 50, pageName: 'task_page');

        $projects = $queryProject->orderBy('active', 'desc')
            ->orderBy('updated_at', 'desc')
            ->paginate(perPage: 50, pageName: 'project_page');

        $contacts = $queryContact->orderBy('contacts.name', 'desc')->paginate(perPage: 50, pageName: 'contact_page');

        $tasks->appends([
            'search_query_task' => $search_query_task,
            'current_search_tab' => $request->get('current_search_tab')
        ]);
        $projects->appends([
            'search_query_project' => $search_query_project,
            'current_search_tab' => $request->get('current_search_tab')
        ]);

        $contacts->appends([
            'search_query_contact' => $search_query_contact,
            'current_search_tab' => $request->get('current_search_tab')
        ]);

        return Inertia::render('Client/Show', [
            'client' => $client,
            'projects' => $projects,
            'contacts' => $contacts,
            'tasks' => $tasks,
            'search_query_project' => $search_query_project,
            'search_query_contact' => $search_query_contact,
            'search_query_task' => $search_query_task,
            'current_search_tab' => $request->get('current_search_tab') ?? "",
            'primaryId' => $client->id,
        ]);
    }
}
