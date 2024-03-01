<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use Illuminate\Database\Eloquent\Builder;

class SearchNamePipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $searchName = request('search_query') ?? "";
        if (!empty($searchName)) {
            $query->where(function (Builder $q) use ($searchName) {
                $q->where('client_projects.project_name', 'LIKE', "%$searchName%")
                    ->orWhereHas('client', function (Builder $qc) use ($searchName) {
                        $qc->where('clients.name', 'LIKE', "%$searchName%");
                    });
            });

        }
        return $next($query);
    }
}
