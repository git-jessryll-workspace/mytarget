<?php

namespace App\Http\Repositories\Pipelines\Query\Board;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByProjectId extends HandleQueryPipe
{
    /**
     * @param int $projectId
     */
    public function __construct(
        private readonly int $projectId
    )
    {
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('boards.client_project_id', $this->projectId);
    }
}
