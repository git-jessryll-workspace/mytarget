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
        $data = [
            'name' => $request->validated('name'),
            'sort' => (int)$request->validated('sort') ?? 0,
            'client_id' => $request->validated('client_id'),
            'client_project_id' => $request->validated('client_project_id'),
        ];

        $board = Board::query()->create($data);
        return redirect()->back()->with(['board' => $board]);
    }
}
