<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\UpdateBoardRequest;
use App\Http\Service\Board\BoardService;
use App\Models\Board;
use Illuminate\Http\RedirectResponse;

class UpdateBoardController extends Controller
{
    /**
     * @param BoardService $boardService
     */
    public function __construct(
        private readonly BoardService $boardService
    )
    {
    }

    /**
     * @param Board $board
     * @param UpdateBoardRequest $request
     * @return RedirectResponse
     */
    public function __invoke(Board $board, UpdateBoardRequest $request): RedirectResponse
    {
        $data = [
            'name' => $request->validated('name')
        ];

        $this->boardService->update($board->id, $data);

        return redirect()->back();
    }
}
