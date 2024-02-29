<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Models\Board;
use App\Models\Task;

class DeleteBoardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Board $board)
    {
        $tasksConnected = Task::query()->where('board_id', $board->id)->get();
        if ($tasksConnected->count() > 0) {
            return redirect()->back()->with('error', 'Board has tasks connected to it. Please delete the tasks first.');
        }
        $board->delete();

        return redirect()->back();
    }
}
