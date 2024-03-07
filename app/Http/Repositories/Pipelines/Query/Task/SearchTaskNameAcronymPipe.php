<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class SearchTaskNameAcronymPipe extends HandleQueryPipe
{
    private array $allowedKeys = [
        'acronyms.acro_counter',
    ];
    public function __construct()
    {
        $this->setAllowedKeys($this->allowedKeys);
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    public function queryBuilder(Builder $query): Builder
    {
        $searchTaskQuery = request('search_query_task') ?? "";

        if (!empty($searchTaskQuery)) {
            $query->where(function (Builder $q) use ($searchTaskQuery) {
                $q->where('tasks.name', 'LIKE', "%$searchTaskQuery%")
                    ->orWhereHas('acronym', function (Builder $ql) use ($searchTaskQuery) {
                        if (!empty($searchTaskQuery)) {
                            $searchTaskQuery .= "*";
                        }
                        $this->applyFulltextSearchToQuery($ql,$searchTaskQuery,$this->allowedKeys);
                    });
            });
        }

        return $query;
    }
}
