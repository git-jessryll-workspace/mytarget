<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\BoardContract;
use App\Models\Board;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;

class BoardRepository extends Repository implements BoardContract
{
    public function __construct(Board $board)
    {
        parent::__construct($board);
    }

    /**
     * @return Builder|QueryBuilder
     */
    public function getBoards(): Builder|QueryBuilder
    {
        return $this->queryPipeline();
    }

    /**
     * @return Builder
     */
    protected function model(): Builder
    {
        return Board::query();
    }

    /**
     * @param array $pipes
     * @return $this
     */
    public function setPipelines(array $pipes = []): static
    {
        $this->setThroughClasses($pipes);
        return $this;
    }
}
