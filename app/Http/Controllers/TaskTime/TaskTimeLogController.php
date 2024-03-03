<?php

namespace App\Http\Controllers\TaskTime;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskTime\FetchTaskTimeLogRequest;
use App\Http\Service\TaskTimeLog\GeneralTimelogService;
use Illuminate\Http\JsonResponse;

class TaskTimeLogController extends Controller
{
    public function __construct(
        private readonly GeneralTimelogService $timelogService
    )
    {
    }

    /**
     * @param FetchTaskTimeLogRequest $request
     * @return JsonResponse
     */
    public function __invoke(FetchTaskTimeLogRequest $request): \Illuminate\Http\JsonResponse
    {
        $taskId = $request->validated('task_id');
        $taskTimeQuery = $this->timelogService->getTimeLogs((int)$taskId, [
            'search_query' => $request->get('search_query') ?? ""
        ]);
        return response()->json([
            'task_time_logs' => $taskTimeQuery
        ]);
    }
}
