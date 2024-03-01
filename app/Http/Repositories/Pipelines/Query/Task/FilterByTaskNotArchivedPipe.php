<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class FilterByTaskNotArchivedPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->where('tasks.is_archived', false));
    }
}
