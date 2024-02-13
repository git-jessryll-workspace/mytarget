<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Http\Service\TaskTimeLog\TimelogService;
use App\Models\Board;
use App\Models\Task;
use App\Models\TaskTimeLog;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowTaskController extends Controller
{
    /**
     * @param Task $task
     * @param Request $request
     * @return Response
     */
    public function __invoke(Task $task, Request $request): Response
    {
        $boards = Board::query()->where('client_project_id', $task->client_project_id)->get();
        $timeLogs = TaskTimeLog::query()->where('task_id', $task->id)->orderBy('created_at','desc')->get();

        $timeLogObject = [
            'weeks' => 0,
            'days' => 0,
            'hours' => 0,
            'minutes' => 0
        ];
        $timeLogService = new TimelogService();
        foreach ($timeLogs as $timeLog) {
            $timeLogObject = $timeLogService->calculateTotalHoursAndWeeks($timeLog->time_log, $timeLogObject);
        }

        return Inertia::render('Task/Show', [
            'task' => $task,
            'boards' => $boards,
            'all_time_logs' => $timeLogs,
            'time_log_object' => $timeLogObject
        ]);
    }
}
