<?php

namespace App\Http\Service\TaskTimeLog;

use App\Http\Repositories\Pipelines\Query\Timelog\FilterByTaskId;
use App\Http\Repositories\Pipelines\Query\Timelog\SortByCreatedAt;

class GeneralTimelogService extends TimelogService
{
    public function getTimeLogs(int $taskId, array $appends)
    {
        return $this->taskTimelogRepository
            ->setPipelines([
                new FilterByTaskId($taskId),
                SortByCreatedAt::class
            ])
            ->getTimelogs()
            ->paginate(20)
            ->appends($appends);
    }
}
