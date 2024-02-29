<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\UpdateBoardNameRequest;
use App\Models\Board;

class UpdateBoardNameController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(UpdateBoardNameRequest $request)
    {
        $data = [
            'name' => $request->validated('name')
        ];

        Board::query()->where('id', $request->validated('board_id'))->update($data);

        return redirect()->back();
    }
}
