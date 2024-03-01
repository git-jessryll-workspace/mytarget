<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Http\Service\Task\GeneralTaskService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
    public function __construct(
        private readonly GeneralTaskService $taskService
    )
    {
    }

    /**
     * Handle the incoming request.
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $searchQuery = $request->get('search_query') ?? '';
        $searchDate = $request->get('search_date') ?? '';
        $sortPriorityLevel = $request->get('sort_priority_level') ?? 'desc';

        $appends = [
            'search_query' => $searchQuery,
            'search_date' => $searchDate,
            'sort_priority_level' => $sortPriorityLevel
        ];

        $tasks = $this->taskService->getTasks($appends);

        return Inertia::render('Task', [
            'tasks' => $tasks,
            'search_query' => $searchQuery,
            'search_date' => $searchDate
        ]);
    }
}
