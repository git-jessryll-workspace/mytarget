<?php

namespace App\Http\Controllers\TaskTime;

use App\Http\Controllers\Controller;
use App\Http\Requests\TaskTime\CreateTaskTimeLogRequest;
use App\Models\ClientProject;
use App\Models\TaskTimeLog;
use Illuminate\Validation\ValidationException;

class CreateTaskTimeLogController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateTaskTimeLogRequest $request)
    {
        $clientProject = ClientProject::query()->where('id', $request->validated('client_project_id'))->first();
        if (!$clientProject) {
            throw ValidationException::withMessages(['error_message' => 'Client not found']);
        }
        $data = [
            'task_id' => $request->validated('task_id'),
            'client_id' => $clientProject->client_id,
            'client_project_id' => $request->validated('client_project_id'),
            'body' => $request->validated('body'),
            'time_log' => $request->validated('time_log'),
            'created_at' => $request->validated('created_at') ?? now(),
        ];

        $taskTimeLog = TaskTimeLog::query()->create($data);

        return redirect()->back()->with(['task_time_log' => $taskTimeLog]);
    }
}
