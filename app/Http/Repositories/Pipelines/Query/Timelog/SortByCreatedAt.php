<?php

namespace App\Http\Repositories\Pipelines\Query\Timelog;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SortByCreatedAt extends HandleQueryPipe
{
    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->orderBy('task_time_logs.created_at', 'desc');
    }
}
