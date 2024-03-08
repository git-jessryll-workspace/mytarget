<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchTaskPipe extends HandleQueryPipe
{



    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        $searchName = request('search_query') ?? "";

        if (empty($searchName)) return $query;

        return $query->where(function (Builder $query) use ($searchName) {
            $this->applyFulltextSearchToQuery($query, $searchName."*", 'tasks.name')
                ->orWhereHas('client', function (Builder $q) use ($searchName) {
                    $this->applyFulltextSearchToQuery($q, $searchName."*", 'clients.name');
                })
                ->orWhereHas('clientProject', function (Builder $q) use ($searchName) {
                    $this->applyFulltextSearchToQuery($q, $searchName."*", 'client_projects.project_name');
                })
                ->orWhereHas('acronym', function ($ql) use ($searchName) {
                    $this->applyFulltextSearchToQuery($ql, $searchName."*", 'acronyms.acro_counter');
                });
        });
    }
}
