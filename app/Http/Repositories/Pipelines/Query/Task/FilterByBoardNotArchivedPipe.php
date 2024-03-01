<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class FilterByBoardNotArchivedPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->where('boards.is_hidden', false));
    }
}
