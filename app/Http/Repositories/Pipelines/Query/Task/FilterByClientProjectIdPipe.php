<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByClientProjectIdPipe extends HandleQueryPipe
{
    public function __construct(
        private readonly int $clientProjectId
    )
    {
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function queryBuilder(Builder $query): Builder
    {
        return $query->where('tasks.client_project_id', $this->clientProjectId);
    }
}
