<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use Illuminate\Database\Eloquent\Builder;

class FilterByClientAuthIdPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->whereHas('client', function(Builder $queryClient) {
            $queryClient->where('clients.user_id', auth()->id());
        }));
    }
}
