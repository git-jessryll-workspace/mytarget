<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\ChangeBoardPositionRequest;
use App\Http\Service\Board\BoardService;
use App\Models\Board;

class ChangeBoardPositionController extends Controller
{
    public function __construct(
        private readonly BoardService $boardService
    )
    {
    }

    public function __invoke(ChangeBoardPositionRequest $request)
    {
        $boardFromId = $request->validated('board_from_id');
        $boardToId = $request->validated('board_to_id');

        $boardFrom = $this->boardService->findById($boardFromId);
        $boardTo = $this->boardService->findById($boardToId);

        $this->boardService->update((int)$boardFromId, ['sort' => $boardTo->sort]);
        $this->boardService->update((int)$boardToId, ['sort' => $boardFrom->sort]);

        return redirect()->back();
    }
}
