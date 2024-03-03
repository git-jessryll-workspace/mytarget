<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByTaskCreatedPipe extends HandleQueryPipe
{
    /**
     * @param Builder $query
     * @return Builder
     */
    public function queryBuilder(Builder $query): Builder
    {
        $searchDate = request('search_date') ?? '';

        if (!empty($searchDate)) {
            $dateStart = $searchDate . ' 00:00:01';
            $dateEnd = $searchDate . ' 23:59:59';
            $query->where('tasks.created_at', '>=', "$dateStart")
                ->where('tasks.created_at', '<=', "$dateEnd");
        }

        return $query;
    }
}
