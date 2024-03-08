<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class SearchNamePipe extends HandleQueryPipe
{

    protected function queryBuilder(Builder $query): Builder
    {
        $searchName = request('search_query') ?? "";
        if (!empty($searchName)) {

            $query->where(function (Builder $q) use ($searchName){
                return $q->whereRaw("MATCH (project_name) AGAINST (? IN BOOLEAN MODE)", [$searchName."*"]);
            });
        }
        Log::info('Query: ' . $query->toSql());
        Log::info('Bindings: ' . implode(', ', $query->getBindings()));
return $query;
        // if (!empty($searchName)) {
        //     $query->where(function (Builder $q) use ($searchName) {
        //         $q->where('client_projects.project_name', 'LIKE', "%$searchName%")
        //             ->orWhereHas('client', function (Builder $qc) use ($searchName) {
        //                 $qc->where('clients.name', 'LIKE', "%$searchName%");
        //             });
        //     });

        // }
        // return $query;
    }
}
