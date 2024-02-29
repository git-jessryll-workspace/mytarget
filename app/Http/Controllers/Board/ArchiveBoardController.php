<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\ArchiveBoardRequest;
use App\Models\Board;
use App\Models\Task;

class ArchiveBoardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(ArchiveBoardRequest $request)
    {
        $board = Board::query()->where('id', $request->validated('board_id'))->first();
        if (!$board) {
            return redirect()->back()->with('error', 'Board not found');
        }
        Task::query()->where('board_id', $board->id)->update(['is_archived' => true]);
        $board->update(['is_hidden' => true]);
        return redirect()->back();
    }
}
