<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TaskController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $query = Task::query()->select([
            'tasks.id',
            'tasks.name',
            'tasks.priority_level',
            'clients.name AS client_name',
            'acronyms.counter',
        ]);

        return Inertia::render('Task', []);
    }
}
