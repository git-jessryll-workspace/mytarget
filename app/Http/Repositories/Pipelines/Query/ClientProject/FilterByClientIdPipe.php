<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByClientIdPipe extends HandleQueryPipe
{
    /**
     * @param int $clientId
     */
    public function __construct(
        private readonly int $clientId
    )
    {
    }

    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('client_projects.client_id', $this->clientId);
    }
}
