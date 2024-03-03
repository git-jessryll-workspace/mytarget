<?php

namespace App\Http\Repositories\Pipelines\Query\Timelog;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByTaskId extends HandleQueryPipe
{
    /**
     * @param int $taskId
     */
    public function __construct(private readonly int $taskId)
    {
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('task_time_logs.task_id', $this->taskId);
    }
}
