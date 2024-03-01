<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use Illuminate\Database\Eloquent\Builder;

class FilterByAuthIdPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->where('contacts.user_id', auth()->id()));
    }
}
