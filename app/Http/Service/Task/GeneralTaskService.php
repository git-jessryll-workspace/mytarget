<?php

namespace App\Http\Service\Task;

use App\Http\Repositories\Pipelines\Query\Task\FilterByBoardNotArchivedPipe;
use App\Http\Repositories\Pipelines\Query\Task\FilterByTaskCreatedPipe;
use App\Http\Repositories\Pipelines\Query\Task\FilterByTaskNotArchivedPipe;
use App\Http\Repositories\Pipelines\Query\Task\SearchTaskPipe;
use App\Http\Repositories\Pipelines\Query\Task\SortByCreatedAt;
use App\Http\Repositories\Pipelines\Query\Task\SortByPriorityLevelPipe;
use App\Http\Repositories\Pipelines\Query\Task\TaskQueryListPipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GeneralTaskService extends TaskService
{
    /**
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getTasks(array $appends = []): LengthAwarePaginator
    {
        return $this->taskRepository
            ->setPipelines([
                TaskQueryListPipe::class,
                FilterByTaskNotArchivedPipe::class,
                FilterByBoardNotArchivedPipe::class,
                FilterByTaskCreatedPipe::class,
                SearchTaskPipe::class,
                SortByPriorityLevelPipe::class,
                SortByCreatedAt::class,
            ])
            ->getTasks()
            ->paginate(50)
            ->appends($appends);
    }
}
