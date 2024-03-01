<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use Illuminate\Database\Eloquent\Builder;

class SortByContactNamePipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next(
            $query->orderBy('contacts.name', request('sort_contact_name') ?? "asc")
        );
    }
}
