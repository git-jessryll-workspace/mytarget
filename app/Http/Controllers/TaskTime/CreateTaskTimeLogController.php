<?php

namespace App\Http\Controllers\TaskTime;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskTime\CreateTaskTimeLogRequest;
use App\Http\Service\ClientProject\ProjectService;
use App\Http\Service\TaskTimeLog\TimelogService;
use Illuminate\Http\RedirectResponse;

class CreateTaskTimeLogController extends Controller
{

    /**
     * @param TimelogService $timelogService
     * @param ProjectService $projectService
     */
    public function __construct(
        private readonly TimelogService $timelogService,
        private readonly ProjectService $projectService
    )
    {
    }

    /**
     * @param CreateTaskTimeLogRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateTaskTimeLogRequest $request): \Illuminate\Http\RedirectResponse
    {
        $clientProject = $this->projectService->findById((int) $request->validated('client_project_id'));
        $data = [
            'task_id' => $request->validated('task_id'),
            'client_id' => $clientProject->client_id,
            'client_project_id' => $request->validated('client_project_id'),
            'body' => $request->validated('body'),
            'time_log' => $request->validated('time_log'),
            'created_at' => $request->validated('created_at') ?? now(),
        ];

        $taskTimeLog = $this->timelogService->create($data);

        return redirect()->back()->with(['task_time_log' => $taskTimeLog]);
    }
}
