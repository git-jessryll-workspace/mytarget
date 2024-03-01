<?php

namespace App\Http\Repositories\Pipelines\Query\Client;

use Illuminate\Database\Eloquent\Builder;

class SearchNamePipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $searchName = request('search_query') ?? "";
        if (!empty($searchName)) {
            $query->where('clients.name', 'LIKE', "%$searchName%");
        }
        return $next($query);
    }
}
