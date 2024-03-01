<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class FilterByTaskCreatedPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $searchDate = request('search_date') ?? '';

        if (!empty($searchDate)) {
            $dateStart = $searchDate . ' 00:00:01';
            $dateEnd = $searchDate . ' 23:59:59';
            $query->where('tasks.created_at', '>=', "$dateStart")
                ->where('tasks.created_at', '<=', "$dateEnd");
        }

        return $next($query);
    }
}
