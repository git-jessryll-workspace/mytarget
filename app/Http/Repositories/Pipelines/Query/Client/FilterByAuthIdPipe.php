<?php

namespace App\Http\Repositories\Pipelines\Query\Client;

use Illuminate\Database\Eloquent\Builder;

class FilterByAuthIdPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next(
            $query->where('clients.user_id', auth()->id())
        );
    }
}
