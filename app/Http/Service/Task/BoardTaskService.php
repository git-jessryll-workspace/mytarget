<?php

namespace App\Http\Service\Task;

use App\Http\Repositories\Pipelines\Query\Task\FilterByBoardIdPipe;
use Illuminate\Database\Eloquent\Collection;

class BoardTaskService extends TaskService
{
    /**
     * @param int $boardId
     * @return array|Collection|\Illuminate\Support\Collection
     */
    public function getTasks(int $boardId): array|Collection|\Illuminate\Support\Collection
    {
        return $this->taskRepository
            ->setPipelines([
                new FilterByBoardIdPipe($boardId)
            ])
            ->getTasks()
            ->get();
    }

    public function archivedTasks(int $boardId)
    {
        return $this->taskRepository->updateBy($boardId, [
            'is_archived' => true,
        ], 'board_id');
    }
}
