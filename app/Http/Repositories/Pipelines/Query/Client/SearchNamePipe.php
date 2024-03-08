<?php

namespace App\Http\Repositories\Pipelines\Query\Client;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchNamePipe extends HandleQueryPipe
{

    protected function queryBuilder(Builder $query): Builder
    {
        $searchName = request('search_query') ?? "";
        if (empty($searchName)) return $query;
        
        return $this->applyFulltextSearchToQuery($query,$searchName."*", 'clients.name');
    }
}
