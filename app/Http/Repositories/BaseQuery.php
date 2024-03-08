<?php

namespace App\Http\Repositories;

use Illuminate\Database\Eloquent\Builder;

class BaseQuery
{
   /**
     * @param Builder $query
     * @param string $keywords
     * @param string|array $key
     * @return Builder
     */
    public function applyFulltextSearchToQuery(Builder $query, string $keywords, string|array $key, string $mode = 'boolean'): Builder
    {
        // ignore if keywords is empty to search
        if (empty($keywords)) return $query;

        $keys = "";
        if (is_string($key)) {
            $keys = $key;
        } else if(is_array ($key)) {
            $keys = implode(",", $key);
        }

        if ($mode === 'boolean') {
            return $query->whereRaw("MATCH ($keys) AGAINST (? IN BOOLEAN MODE)", [$keywords]);
        }

        return $query->whereRaw("MATCH ($keys) AGAINST (? IN NATURAL LANGUAGE MODE)", [$keywords]);
    }
}
