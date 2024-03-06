<?php

namespace App\Http\Repositories\Pipelines\Query;

use App\Http\Repositories\BaseQuery;
use Illuminate\Database\Eloquent\Builder;

abstract class HandleQueryPipe extends BaseQuery
{
    private array $allowedKeys = [];

    abstract protected function queryBuilder(Builder $query): Builder;

    public function handle(Builder $query, \Closure $next)
    {
        return $next($this->queryBuilder($query));
    }
    
}
