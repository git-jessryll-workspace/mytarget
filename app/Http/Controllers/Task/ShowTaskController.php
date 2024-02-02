<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
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
        return Inertia::render('Task/Show', [
            'task' => $task,       
        ]);
    }
}
