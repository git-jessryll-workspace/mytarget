<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Http\Requests\Task\CreateTaskRequest;
use App\Models\Task;
use Illuminate\Http\RedirectResponse;

class CreateTaskController extends Controller
{
    /**
     * @param CreateTaskRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateTaskRequest $request): RedirectResponse
    {
        $data = [
            'name' => $request->validated('name'),
            'description' => $request->validated('description'),
            'priority_level' => $request->validated('priority_level') ?? 0,
            'client_id' => $request->validated('client_id'),
            'client_project_id'=>$request->validated('client_project_id'),
            'board_id' => $request->validated('board_id'),
            'task_status' => $request->validated('task_status') ?? 0,
            'due_date' => $request->validated('due_date') ?? null
        ];

        $task = Task::query()->create($data);
        return redirect()->back()->with('task', $task);
    }
}
