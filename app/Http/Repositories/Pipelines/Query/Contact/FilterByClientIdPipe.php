<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByClientIdPipe extends HandleQueryPipe
{
    /**
     * @param int $clientId
     */
    public function __construct(private readonly int $clientId)
    {
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('client_contacts.client_id', $this->clientId);
    }
}
