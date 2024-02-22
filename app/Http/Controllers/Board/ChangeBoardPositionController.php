<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\ChangeBoardPositionRequest;
use App\Models\Board;

class ChangeBoardPositionController extends Controller
{

    public function __invoke(ChangeBoardPositionRequest $request)
    {
        $sort = (int) $request->validated('sort');
        $boardId = $request->validated('board_id');
        Board::query()->where('id', $boardId)->update(['sort' => $sort]);
        return redirect()->back();
    }
}
