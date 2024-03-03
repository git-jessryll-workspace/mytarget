<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SortByCreatedAt extends HandleQueryPipe
{
    /**
     * @param Builder $query
     * @return Builder
     */
    public function queryBuilder(Builder $query): Builder
    {
        $taskSortCreatedAt = request('task_sort_created_at') ?? 'desc';
        return $query->orderBy('tasks.created_at', $taskSortCreatedAt);
    }
}
