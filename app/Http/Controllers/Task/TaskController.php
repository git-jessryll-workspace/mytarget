<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class TaskController extends Controller
{
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
        $taskQuery = Task::query()
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
                'boards.id AS board_id'
            ])
            ->with(['client', 'clientProject', 'board'])
            ->leftJoin('acronyms', 'tasks.id', '=', 'acronyms.task_id')
            ->leftJoin('clients', 'tasks.client_id', '=', 'clients.id')
            ->leftJoin('client_projects', 'tasks.client_project_id', '=', 'client_projects.id')
            ->leftJoin('boards', 'tasks.board_id', '=', 'boards.id')
            ->where('tasks.is_archived', false)
            ->where('boards.is_hidden', false);

        if (!empty($searchQuery)) {
            $searchName = $searchQuery;

            $taskQuery->where(function (Builder $query) use ($searchName) {
                $query->where('tasks.name', 'LIKE', "%{$searchName}%")
                    ->orWhereHas('client', function (Builder $q) use ($searchName) {
                        $q->where('clients.name', 'LIKE', "%{$searchName}%");
                    })
                    ->orWhereHas('clientProject', function (Builder $q) use ($searchName) {
                        $q->where('client_projects.project_name', 'LIKE', "%{$searchName}%");
                    })
                ->orWhereHas('acronym', function ($ql) use ($searchName) {
                    $ql->whereRaw('CONCAT("#", acronym, "-", counter) LIKE ?', ["%$searchName%"]);
                });
            });
        }

        if (!empty($searchDate)) {
            $dateStart = $searchDate . ' 00:00:01';
            $dateEnd = $searchDate . ' 23:59:59';
            $taskQuery->where('tasks.created_at', '>=', "$dateStart")
                ->where('tasks.created_at', '<=', "$dateEnd");
        }

        $tasks = $taskQuery
            ->orderBy('tasks.created_at', $sortPriorityLevel)
            ->paginate(50);

        $tasks->appends(['search_query' => $searchQuery, 'search_date' => $searchDate, 'sort_priority_level' => $sortPriorityLevel]);

        return Inertia::render('Task', [
            'tasks' => $tasks,
            'search_query' => $searchQuery,
            'search_date' => $searchDate
        ]);
    }
}
