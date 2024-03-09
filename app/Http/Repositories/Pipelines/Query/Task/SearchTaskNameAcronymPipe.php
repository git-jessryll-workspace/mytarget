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

        if (empty($searchTaskQuery)) return $query;
        return $query->where(function (Builder $q) use ($searchTaskQuery) {
            $this->applyFulltextSearchToQuery($q, $searchTaskQuery."*", ['tasks.name'])
                ->orWhereHas('acronym', function (Builder $ql) use ($searchTaskQuery) {
                    if (empty($searchTaskQuery)) return $ql;
                    return $this->applyFulltextSearchToQuery($ql, "\".$searchTaskQuery . *\"", 'acronyms.acro_counter');
                });
        });
    }
}
