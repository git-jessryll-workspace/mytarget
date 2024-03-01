<?php

namespace App\Http\Service\Board;

use App\Http\Repositories\Pipelines\Query\Board\FilterByProjectId;

class ProjectBoardService extends BoardService
{
    public function getBoards(int $clientProjectId)
    {
        return $this->boardRepository
            ->setPipelines([
                new FilterByProjectId($clientProjectId)
            ])
            ->getBoards()
            ->get();
    }
}
