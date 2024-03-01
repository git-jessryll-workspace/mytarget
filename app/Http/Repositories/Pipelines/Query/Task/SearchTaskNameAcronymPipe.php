<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class SearchTaskNameAcronymPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $searchTaskQuery = request('search_query_task') ?? "";

        if (!empty($searchTaskQuery)) {
            $query->where(function (Builder $q) use ($searchTaskQuery) {
                $q->where('tasks.name', 'LIKE', "%$searchTaskQuery%")
                    ->orWhereHas('acronym', function (Builder $ql) use ($searchTaskQuery) {
                        $ql->whereRaw('CONCAT("#",acronym,"-",counter) LIKE ?', ["%$searchTaskQuery%"]);
                    });
            });
        }

        return $next($query);
    }
}
