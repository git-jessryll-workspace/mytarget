<?php

namespace App\Http\Repositories\Pipelines\Query\Board;

use Illuminate\Database\Eloquent\Builder;

class FilterByProjectId
{
    public function __construct(
        private readonly int $projectId
    )
    {
    }

    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->where('boards.client_project_id', $this->projectId));
    }
}
