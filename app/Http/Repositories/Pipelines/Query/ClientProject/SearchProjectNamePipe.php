<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchProjectNamePipe extends HandleQueryPipe
{

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        $search = request('search_query_project') ?? "";
        return $query->where('client_projects.project_name', 'LIKE', "%$search%");
    }
}
