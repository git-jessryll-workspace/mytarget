<?php

namespace App\Http\Repositories\Pipelines\Query\Client;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByAuthIdPipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('clients.user_id', auth()->id());
    }
}
