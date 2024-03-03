<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SortByPriorityLevelPipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        $sortPriorityLevel = request('sort_priority_level') ?? 'desc';
        return $query->orderBy('tasks.priority_level', $sortPriorityLevel);
    }
}
