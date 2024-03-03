<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SortByContactNamePipe extends HandleQueryPipe
{
    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->orderBy('contacts.name', request('sort_contact_name') ?? "asc");
    }
}
