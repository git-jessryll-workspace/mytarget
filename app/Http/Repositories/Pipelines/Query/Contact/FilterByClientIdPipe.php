<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use Illuminate\Database\Eloquent\Builder;

class FilterByClientIdPipe
{
    public function __construct(private readonly int $clientId)
    {
    }

    public function handle(Builder $query, \Closure $next)
    {
        return $next(
            $query->where('client_contacts.client_id', $this->clientId)
        );
    }
}
