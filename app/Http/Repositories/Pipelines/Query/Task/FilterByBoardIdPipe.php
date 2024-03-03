<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class FilterByBoardIdPipe extends HandleQueryPipe
{
    /**
     * @param int $boardId
     */
    public function __construct(
        private readonly int $boardId
    )
    {
    }

    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->where('tasks.board_id', $this->boardId);
    }
}
