<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchNameEmailPipe extends HandleQueryPipe
{
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where(function (Builder $query1) {
            $search = request('search_query') ?? "";
            $query1->where('contacts.name', 'LIKE', "%$search%")
                ->orWhere('contacts.email', 'LIKE', "%$search%");
        });
    }
}
