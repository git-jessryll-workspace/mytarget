<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchProjectNamePipe extends HandleQueryPipe
{
    const PROJECT_NAME_KEY = "client_projects.project_name";
    public function __construct()
    {
        $this->setAllowedKeys([self::PROJECT_NAME_KEY]);
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        $search = request('search_query_project') ?? "";
        return $this->applyFulltextSearchToQuery($query, $search, self::PROJECT_NAME_KEY);
    }
}
