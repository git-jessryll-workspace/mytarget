<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class SortByPriorityLevelPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $sortPriorityLevel = request('sort_priority_level') ?? 'desc';

        return $next(
            $query->orderBy('tasks.priority_level', $sortPriorityLevel)
        );
    }
}
