<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\ChangeBoardPositionRequest;
use App\Models\Board;

class ChangeBoardPositionController extends Controller
{
    
    public function __invoke(Board $board, ChangeBoardPositionRequest $request)
    {
        $sort = (int) $request->validated('sort');
        $board->update(['sort' => $sort]);
        return redirect()->back();
    }
}
