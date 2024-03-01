<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Illuminate\Database\Eloquent\Builder;

class FilterByBoardIdPipe
{
    public function __construct(
        private readonly int $boardId
    )
    {
    }

    public function handle(Builder $query, \Closure $next)
    {
        return $next(
            $query->where('tasks.board_id', $this->boardId)
        );
    }
}
