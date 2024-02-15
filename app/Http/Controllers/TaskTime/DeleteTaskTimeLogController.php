<?php

namespace App\Http\Controllers\TaskTime;

use App\Http\Controllers\Controller;
use App\Models\TaskTimeLog;
use Illuminate\Http\Request;

class DeleteTaskTimeLogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(TaskTimeLog $taskTimeLog)
    {
        $taskTimeLog->delete();
        return redirect()->back();
    }
}
