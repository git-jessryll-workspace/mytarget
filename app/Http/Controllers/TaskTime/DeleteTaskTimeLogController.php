<?php

namespace App\Http\Controllers\TaskTime;

use App\Http\Controllers\Controller;
use App\Http\Service\TaskTimeLog\TimelogService;
use App\Models\TaskTimeLog;
use Illuminate\Http\RedirectResponse;

class DeleteTaskTimeLogController extends Controller
{
    /**
     * @param TimelogService $timelogService
     */
    public function __construct(
        private readonly TimelogService $timelogService
    )
    {
    }

    /**
     * @param TaskTimeLog $taskTimeLog
     * @return RedirectResponse
     */
    public function __invoke(TaskTimeLog $taskTimeLog): \Illuminate\Http\RedirectResponse
    {
        $this->timelogService->delete($taskTimeLog->id);
        return redirect()->back();
    }
}
