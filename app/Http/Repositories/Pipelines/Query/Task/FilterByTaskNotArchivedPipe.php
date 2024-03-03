<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByTaskNotArchivedPipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('tasks.is_archived', false);
    }
}
