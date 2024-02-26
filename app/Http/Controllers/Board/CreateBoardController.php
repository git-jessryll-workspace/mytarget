<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\CreateBoardRequest;
use App\Models\Board;
use Illuminate\Http\RedirectResponse;

class CreateBoardController extends Controller
{
    /**
     * @param CreateBoardRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateBoardRequest $request): RedirectResponse
    {
        $clientProjectId = $request->validated("client_project_id");
        $boards = Board::query()->where('client_project_id', $clientProjectId)->count();
        $data = [
            'name' => $request->validated('name'),
            'sort' => $boards,
            'client_id' => $request->validated('client_id'),
            'client_project_id' => $request->validated('client_project_id'),
        ];

        $board = Board::query()->create($data);
        return redirect()->back()->with(['board' => $board]);
    }
}
