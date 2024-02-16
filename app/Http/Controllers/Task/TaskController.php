<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $searchQuery = $request->get('search_query') ?? '';
        $searchDate = $request->get('search_date') ?? '';
        $sortPriorityLevel = $request->get('sort_priority_level') ?? 'desc';
        $taskQuery = Task::query()->with(['client', 'clientProject'])
            ->where('tasks.is_archived', false);

        if (!empty($searchQuery)) {
            $searchName = $searchQuery;

            $taskQuery->where(function (Builder $query) use ($searchName) {
                $query->where('tasks.name', 'LIKE', "%{$searchName}%")
                    ->orWhereHas('client', function (Builder $q) use ($searchName) {
                        $q->where('clients.name', 'LIKE', "%{$searchName}%");
                    })
                    ->orWhereHas('clientProject', function (Builder $q) use ($searchName) {
                        $q->where('client_projects.project_name', 'LIKE', "%{$searchName}%");
                    });
            });
        }

        if (!empty($searchDate)) {
            $dateStart = $searchDate . ' 00:00:01';
            $dateEnd = $searchDate . ' 23:59:59';
            $taskQuery->where('tasks.created_at', '>=', "$dateStart")
                ->where('tasks.created_at', '<=', "$dateEnd");
        }

        $tasks = $taskQuery->orderBy('tasks.created_at', $sortPriorityLevel)->paginate(50);

        $tasks->appends(['search_query' => $searchQuery, 'search_date' => $searchDate, 'sort_priority_level' => $sortPriorityLevel]);

        return Inertia::render('Task', [
            'tasks' => $tasks
        ]);
    }
}
