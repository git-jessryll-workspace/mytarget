<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class SearchTaskPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        $searchQuery = request('search_query') ?? "";
        if (!empty($searchQuery)) {
            $searchName = $searchQuery;

            $query->where(function (Builder $query) use ($searchName) {
                $query->where('tasks.name', 'LIKE', "%{$searchName}%")
                    ->orWhereHas('client', function (Builder $q) use ($searchName) {
                        $q->where('clients.name', 'LIKE', "%{$searchName}%");
                    })
                    ->orWhereHas('clientProject', function (Builder $q) use ($searchName) {
                        $q->where('client_projects.project_name', 'LIKE', "%{$searchName}%");
                    })
                    ->orWhereHas('acronym', function ($ql) use ($searchName) {
                        $ql->whereRaw('CONCAT("#", acronym, "-", counter) LIKE ?', ["%$searchName%"]);
                    });
            });
        }
        return $next($query);
    }
}
