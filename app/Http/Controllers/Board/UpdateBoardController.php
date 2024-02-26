<?php

namespace App\Http\Controllers\Board;

use App\Http\Controllers\Controller;
use App\Http\Requests\Board\UpdateBoardRequest;
use App\Models\Board;
use Illuminate\Http\Request;

class UpdateBoardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Board $board, UpdateBoardRequest $request)
    {
        $data = [
            'name' => $request->validated('name')
        ];
        $board->update($data);

        return redirect()->back();
    }
}
