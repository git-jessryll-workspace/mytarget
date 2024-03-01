<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class FilterByClientProjectIdPipe
{
    public function __construct(
        private readonly int $clientProjectId
    )
    {
    }

    public function handle(Builder $query, \Closure $next)
    {
        return $next(
            $query->where('tasks.client_project_id', $this->clientProjectId)
        );
    }
}
