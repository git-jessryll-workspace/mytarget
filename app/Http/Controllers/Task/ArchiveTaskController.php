<?php

namespace App\Http\Controllers\Task;

use App\Http\Controllers\Controller;
use App\Models\Task;
use Illuminate\Http\Request;

class ArchiveTaskController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Task $task)
    {
        $task->fill([
            'is_archived' => true,
        ]);
        $task->save();
        return redirect()->back();
    }
}
