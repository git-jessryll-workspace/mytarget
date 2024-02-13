<?php

namespace App\Http\Controllers\TaskTime;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskTime\FetchTaskTimeLogRequest;
use App\Models\TaskTimeLog;
use Illuminate\Http\JsonResponse;

class TaskTimeLogController extends Controller
{
    /**
     * @param FetchTaskTimeLogRequest $request
     * @return JsonResponse
     */
    public function __invoke(FetchTaskTimeLogRequest $request): \Illuminate\Http\JsonResponse
    {
        $taskId = $request->validated('task_id');
        $taskTimeQuery = TaskTimeLog::query()
            ->where('id', $taskId)
            ->orderBy('created_at', 'desc')
            ->paginate(perPage: 20);
        return response()->json([
            'task_time_logs' => $taskTimeQuery
        ]);
    }
}
