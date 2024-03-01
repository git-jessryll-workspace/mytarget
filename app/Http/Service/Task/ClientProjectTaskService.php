<?php

namespace App\Http\Service\Task;

use App\Http\Repositories\Pipelines\Query\Task\FilterByBoardNotArchivedPipe;
use App\Http\Repositories\Pipelines\Query\Task\FilterByClientIdPipe;
use App\Http\Repositories\Pipelines\Query\Task\FilterByTaskNotArchivedPipe;
use App\Http\Repositories\Pipelines\Query\Task\SearchTaskNameAcronymPipe;
use App\Http\Repositories\Pipelines\Query\Task\SortByCreatedAt;
use App\Http\Repositories\Pipelines\Query\Task\SortByPriorityLevelPipe;
use App\Http\Repositories\Pipelines\Query\Task\TaskQueryListPipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ClientProjectTaskService extends TaskService
{
    /**
     * @param int $clientId
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getTasks(int $clientId, array $appends): LengthAwarePaginator
    {
        return $this->taskRepository
            ->setPipelines([
                TaskQueryListPipe::class,
                new FilterByClientIdPipe($clientId),
                SearchTaskNameAcronymPipe::class,
                FilterByTaskNotArchivedPipe::class,
                FilterByBoardNotArchivedPipe::class,
                SortByPriorityLevelPipe::class,
                SortByCreatedAt::class,
            ])
            ->getTasks()
            ->paginate(perPage: 50, pageName: 'task_page')
            ->appends($appends);
    }
}
