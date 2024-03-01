<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Service\Board\BoardService;
use App\Http\Service\Task\BoardTaskService;
use App\Models\Board;

class DeleteBoardController extends Controller
{
    public function __construct(
        private readonly BoardTaskService $boardTaskService,
        private readonly BoardService     $boardService
    )
    {
    }

    /**
     * Handle the incoming request.
     */
    public function __invoke(Board $board)
    {
        $tasksConnected = $this->boardTaskService->getTasks($board->id);
        if ($tasksConnected->count() > 0) {
            return redirect()->back()->with('error', 'Board has tasks connected to it. Please delete the tasks first.');
        }

        $this->boardService->delete($board->id);

        return redirect()->back();
    }
}
