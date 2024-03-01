<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use Illuminate\Database\Eloquent\Builder;

class SearchProjectNamePipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $search = request('search_query_project') ?? "";
        return $next(
            $query->where('client_projects.project_name', 'LIKE', "%$search%")
        );
    }
}
