<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Http\Requests\Task\UpdateTaskRequest;
use App\Models\Task;
use Illuminate\Http\Request;

class UpdateTaskController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Task $task, UpdateTaskRequest $request)
    {
        $data = [
            'name' => $request->validated('name'),
            'description' => $request->validated('description'),
            'board_id' => $request->validated('board_id'),
            'is_archived' => $request->validated('is_archived'),
            'priority_level' => $request->validated('priority_level'),
            'created_at' => $request->get('created_at') ?? $task->created_at,
        ];
        $task->update($data);
        return redirect()->back()->with(['task' => $task->fresh()]);
    }
}
