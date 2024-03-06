<?php

namespace App\Http\Repositories\Pipelines\Query;

use Illuminate\Database\Eloquent\Builder;

abstract class HandleQueryPipe
{
    private array $allowedKeys = [];

    abstract protected function queryBuilder(Builder $query): Builder;

    public function handle(Builder $query, \Closure $next)
    {
        return $next($this->queryBuilder($query));
    }

    protected function setAllowedKeys(array $allowedKeys): void
    {
        $this->allowedKeys = $allowedKeys;
    }

    /**
     * @param Builder $query
     * @param string $search
     * @param string|array $key
     * @return Builder
     */
    protected function searchByFulltext(Builder $query, string $search, string|array $key): Builder
    {
        if (emptyArray($this->allowedKeys)) {
            throw new \InvalidArgumentException("Required to set allowedKeys");
        }
        if (is_string($key)) {
            $this->isAuthorizedColumns($key);
        }
        return $query->whereRaw("MATCH ($key) AGAINST (? IN NATURAL LANGUAGE MODE)", [$search]);
    }

    /**
     * @param string $key
     * @return void
     */
    private function isAuthorizedColumns(string $key): void
    {
        if (!in_array($key, $this->allowedKeys)) throw new \InvalidArgumentException("Invalid key: $key");
    }
}
