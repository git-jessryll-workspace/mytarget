<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class SortByCreatedAt
{
    /**
     * @param Builder $query
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Builder $query, \Closure $next): mixed
    {
        $taskSortCreatedAt = request('task_sort_created_at') ?? 'desc';
        return $next(
            $query->orderBy('tasks.created_at', $taskSortCreatedAt)
        );
    }
}
