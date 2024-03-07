<?php

namespace App\Http\Repositories\Pipelines\Query\Contact;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Log;

class SearchNameEmailPipe extends HandleQueryPipe
{
    private array $keys = [
        "name",
        "email",
        "contact_number"
    ];

    public function __construct()
    {
        $this->setAllowedKeys($this->keys);
    }

    protected function queryBuilder(Builder $query): Builder
    {
        $query->where(function (Builder $query1) {
            $searchKeywords = request('search_query') ?? "";

            if (!empty($searchKeywords)) {
                $searchKeywords .= '*';
            }

            return $this->applyFulltextSearchToQuery($query1, $searchKeywords, $this->keys);
        });
        return $query;
    }
}
