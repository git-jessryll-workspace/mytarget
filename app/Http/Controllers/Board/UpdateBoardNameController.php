<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\UpdateBoardNameRequest;
use App\Http\Service\Board\BoardService;
use Illuminate\Http\RedirectResponse;

class UpdateBoardNameController extends Controller
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
     * @param UpdateBoardNameRequest $request
     * @return RedirectResponse
     */
    public function __invoke(UpdateBoardNameRequest $request): RedirectResponse
    {
        $boardId = $request->validated('board_id');
        $data = [
            'name' => $request->validated('name')
        ];

        $this->boardService->update((int) $boardId, $data);

        return redirect()->back();
    }
}
