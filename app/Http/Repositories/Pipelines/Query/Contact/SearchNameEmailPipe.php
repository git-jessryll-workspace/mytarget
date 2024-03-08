<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;


class SearchNameEmailPipe extends HandleQueryPipe
{

    protected function queryBuilder(Builder $query): Builder
    {
        $searchKeywords = request('search_query') ?? "";
        if (empty($searchKeywords)) return $query;

        return $query->where(function (Builder $query1) use ($searchKeywords) {
            return $this->applyFulltextSearchToQuery($query1, $searchKeywords . "*", $this->keys);
        });
    }
}
