<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByClientAuthIdPipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->whereHas('client', function(Builder $queryClient) {
            $queryClient->where('clients.user_id', auth()->id());
        });
    }
}
