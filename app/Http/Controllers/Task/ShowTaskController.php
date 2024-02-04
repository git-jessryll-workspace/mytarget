<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Board;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowTaskController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Task $task, Request $request)
    {
        $boards = Board::query()->where('client_project_id', $task->client_project_id)->get();
        return Inertia::render('Task/Show', [
            'task' => $task,
            'boards' => $boards
        ]);
    }
}
