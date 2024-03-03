<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientProjectWithPipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->with([
            'client' => function (BelongsTo $query) {
                $query->select([
                    'clients.id',
                    'clients.name',
                    'clients.user_id'
                ]);
            }
        ]);
    }
}
