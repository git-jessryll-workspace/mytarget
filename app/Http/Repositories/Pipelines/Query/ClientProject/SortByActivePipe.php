<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use Illuminate\Database\Eloquent\Builder;

class SortByActivePipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->orderBy('client_projects.active', 'desc'));
    }
}
