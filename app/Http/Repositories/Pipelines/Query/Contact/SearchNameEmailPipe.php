<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use Illuminate\Database\Eloquent\Builder;

class SearchNameEmailPipe
{
    public function handle(Builder $builder, \Closure $next)
    {
        return $next(
            $builder->where(function (Builder $query) {
                $search = request('search_query') ?? "";
                $query->where('contacts.name', 'LIKE', "%$search%")
                    ->orWhere('contacts.email', 'LIKE', "%$search%");
            })
        );
    }
}
