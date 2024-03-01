<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use Illuminate\Database\Eloquent\Builder;

class ClientContactQueryListPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next(
            $query->select(
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
                ->leftJoin('client_contacts', 'client_contacts.contact_id', '=', 'contacts.id')
        );
    }
}
