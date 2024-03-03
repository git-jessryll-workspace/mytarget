<?php

namespace App\Http\Repositories\Pipelines\Query;

use Illuminate\Database\Eloquent\Builder;

abstract class HandleQueryPipe
{
    abstract protected function queryBuilder(Builder $query): Builder;

    public function handle(Builder $query, \Closure $next)
    {
        return $next($this->queryBuilder($query));
    }
}
