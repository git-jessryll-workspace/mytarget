<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchTaskNameAcronymPipe extends HandleQueryPipe
{
    /**
     * @param Builder $query
     * @return Builder
     */
    public function queryBuilder(Builder $query): Builder
    {
        $searchTaskQuery = request('search_query_task') ?? "";

        if (!empty($searchTaskQuery)) {
            $query->where(function (Builder $q) use ($searchTaskQuery) {
                $q->where('tasks.name', 'LIKE', "%$searchTaskQuery%")
                    ->orWhereHas('acronym', function (Builder $ql) use ($searchTaskQuery) {
                        $ql->whereRaw('acro_counter LIKE ?', ["%$searchTaskQuery%"]);
                    });
            });
        }

        return $query;
    }
}
