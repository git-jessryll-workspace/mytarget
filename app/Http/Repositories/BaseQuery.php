<?php

namespace App\Http\Repositories;

use Illuminate\Database\Eloquent\Builder;

class BaseQuery
{
    private array $allowedKeys = [];

    protected function setAllowedKeys(array $allowedKeys): void
    {
        $this->allowedKeys = $allowedKeys;
    }
    /**
     * @param Builder $query
     * @param string $keywords
     * @param string|array $key
     * @return Builder
     */
    public function applyFulltextSearchToQuery(Builder $query, string $keywords, string|array $key, string $mode = 'boolean'): Builder
    {
        // ignore if empty keywords to search
        if (empty($keywords)) return $query;

        $keys = "";
        if (empty($this->allowedKeys)) {
            throw new \InvalidArgumentException("Required to set allowedKeys");
        }
        if (is_string($key)) {

            if (!in_array($key, $this->allowedKeys)) throw new \InvalidArgumentException("Invalid key: $key");

            $keys = $key;
        } else if(is_array ($key)) {

            $arrayAccepted = array_intersect($key, $this->allowedKeys);

            $keys = implode(",", $arrayAccepted);

            if (empty($arrayAccepted)) throw new \InvalidArgumentException("Invalid keys: $keys");

        }

        if ($mode === 'boolean') {
            return $query->whereRaw("MATCH ($keys) AGAINST (? IN BOOLEAN MODE)", ["\"$keywords*\""]);
        }

        return $query->whereRaw("MATCH ($keys) AGAINST (? IN NATURAL LANGUAGE MODE)", ["\"$keywords\""]);
    }
}
