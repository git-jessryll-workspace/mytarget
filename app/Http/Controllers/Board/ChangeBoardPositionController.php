<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\ChangeBoardPositionRequest;
use App\Models\Board;

class ChangeBoardPositionController extends Controller
{

    public function __invoke(ChangeBoardPositionRequest $request)
    {
        $boardFromId = $request->validated('board_from_id');
        $boardToId = $request->validated('board_to_id');
        $boardFrom = Board::query()->where('id', $boardFromId)->firstOrFail();
        $boardTo = Board::query()->where('id', $boardToId)->firstOrFail();

        Board::query()->where('id', $boardFrom->id)->update([
            'sort' => $boardTo->sort
        ]);

        Board::query()->where('id', $boardTo->id)->update([
            'sort' => $boardFrom->sort,
        ]);
        return redirect()->back();
    }
}
