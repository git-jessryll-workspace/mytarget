<?php

namespace App\Http\Controllers\Task;

use App\Http\Constant\Task\TaskStatus;
use App\Http\Controllers\Controller;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Http\Service\Task\TaskService;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;

class UpdateTaskController extends Controller
{
    /**
     * @param TaskService $taskService
     */
    public function __construct(
        private readonly TaskService $taskService
    )
    {
    }

    /**
     * @param Task $task
     * @param UpdateTaskRequest $request
     * @return RedirectResponse
     */
    public function __invoke(Task $task, UpdateTaskRequest $request): RedirectResponse
    {

        $data = [
            'name' => $request->validated('name'),
            'description' => $request->validated('description'),
            'is_archived' => $request->validated('is_archived'),
            'priority_level' => $request->validated('priority_level'),
            'task_status' => $request->validated('task_status'),
            'created_at' => $request->get('created_at') ?? $task->created_at,
        ];
        $this->taskService->update($task->id, $data);
        return redirect()->back()->with(['task' => $task->fresh()]);
    }
}
