<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class ClientContactQueryListPipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->select(
            [
                'client_contacts.client_id',
                'client_contacts.contact_id',
                'contacts.id',
                'contacts.name',
                'contacts.email',
                'contacts.contact_number',
                'client_contacts.created_at',
            ]
        )
            ->leftJoin('client_contacts', 'client_contacts.contact_id', '=', 'contacts.id');
    }
}
