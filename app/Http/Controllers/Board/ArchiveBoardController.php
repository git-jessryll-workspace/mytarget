<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\ArchiveBoardRequest;
use App\Http\Service\Board\BoardService;
use App\Http\Service\Task\BoardTaskService;
use Illuminate\Http\RedirectResponse;

class ArchiveBoardController extends Controller
{
    /**
     * @param BoardService $boardService
     * @param BoardTaskService $boardTaskService
     */
    public function __construct(
        private readonly BoardService $boardService,
        private readonly BoardTaskService $boardTaskService
    )
    {
    }

    /**
     * @param ArchiveBoardRequest $request
     * @return RedirectResponse
     */
    public function __invoke(ArchiveBoardRequest $request): RedirectResponse
    {
        $board = $this->boardService->findById((int)$request->get('board_id'));

        $this->boardTaskService->archivedTasks($board->id);
        $this->boardService->update($board->id, ['is_hidden' => true]);
        return redirect()->back();
    }
}
