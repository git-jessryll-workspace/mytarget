<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Http\Service\Board\ProjectBoardService;
use App\Http\Service\TaskTimeLog\TimelogService;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShowTaskController extends Controller
{
    public function __construct(
        private readonly TimelogService $timelogService,
        private readonly ProjectBoardService $projectBoardService
    )
    {
    }

    /**
     * @param Task $task
     * @return Response
     */
    public function __invoke(Task $task): Response
    {
        $boards = $this->projectBoardService->getBoards($task->client_project_id);
        $timeLogs = $task->timeLogs;
        $project = $task->clientProject;
        $acronymItem = $task->acronym;

        $timeLogObject = [
            'weeks' => 0,
            'days' => 0,
            'hours' => 0,
            'minutes' => 0
        ];
        $project->boards = $boards;
        foreach ($timeLogs as $timeLog) {
            $timeLogObject = $this->timelogService
                ->calculateTotalHoursAndWeeks($timeLog->time_log, $timeLogObject);
        }

        return Inertia::render('Task/Show', [
            'task' => $task,
            'boards' => $boards,
            'all_time_logs' => $timeLogs,
            'time_log_object' => $timeLogObject,
            'project_client' => $project,
        ]);
    }
}
