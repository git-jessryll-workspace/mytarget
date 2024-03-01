<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class FilterByClientIdPipe
{
    public function __construct(
        private readonly int $clientId
    )
    {
    }

    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->where('tasks.client_id', $this->clientId));
    }
}
