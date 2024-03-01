<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Service\ClientProject\ClientProjectService;
use App\Http\Service\Contact\ClientContactService;
use App\Http\Service\Task\ClientProjectTaskService;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowClientController extends Controller
{
    /**
     * @param ClientProjectTaskService $taskService
     * @param ClientProjectService $clientProjectService
     * @param ClientContactService $contactService
     */
    public function __construct(
        private readonly ClientProjectTaskService $taskService,
        private readonly ClientProjectService     $clientProjectService,
        private readonly ClientContactService     $contactService
    )
    {
    }

    /**
     * @param Client $client
     * @param Request $request
     * @return Response
     */
    public function __invoke(Client $client, Request $request): \Inertia\Response
    {
        $search_query_project = $request->get('search_query_project') ?? '';
        $search_query_contact = $request->get('search_query_contact') ?? '';
        $search_query_task = $request->get('search_query_task') ?? '';

        $tasks = $this->taskService->getTasks($client->id, [
            'search_query_task' => $search_query_task,
            'current_search_tab' => $request->get('current_search_tab')
        ]);

        $projects = $this->clientProjectService->getProjects($client->id, [
            'search_query_project' => $search_query_project,
            'current_search_tab' => $request->get('current_search_tab')
        ]);

        $contacts = $this->contactService->getContacts($client->id, [
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
