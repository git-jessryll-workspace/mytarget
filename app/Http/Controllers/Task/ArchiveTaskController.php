<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Http\Service\Task\TaskService;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;

class ArchiveTaskController extends Controller
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
     * @return RedirectResponse
     */
    public function __invoke(Task $task): \Illuminate\Http\RedirectResponse
    {
        $this->taskService->update($task->id,[
            'is_archived' => true,
        ]);
        return redirect()->back();
    }
}
