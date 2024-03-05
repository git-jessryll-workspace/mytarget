<?php

namespace App\Http\Service\Task;

use App\Http\Repositories\Pipelines\Query\Task\FilterByClientProjectIdPipe;
use App\Http\Repositories\Pipelines\Query\Task\FilterByTaskNotArchivedPipe;
use App\Http\Repositories\Pipelines\Query\Task\SearchTaskNameAcronymPipe;
use App\Http\Repositories\Pipelines\Query\Task\SortByCreatedAt;
use App\Http\Repositories\Pipelines\Query\Task\SortByPriorityLevelPipe;
use App\Http\Repositories\Pipelines\Query\Task\TaskQueryListPipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ProjectTaskService extends TaskService
{

    public function getTasks(int $clientProjectId, array $appends = []): LengthAwarePaginator
    {
        return $this->taskRepository
            ->setPipelines([
                TaskQueryListPipe::class,
                new FilterByClientProjectIdPipe($clientProjectId),
                FilterByTaskNotArchivedPipe::class,
                SearchTaskNameAcronymPipe::class,
                SortByPriorityLevelPipe::class,
                SortByCreatedAt::class
            ])
            ->getTasks()
            ->paginate(50)
            ->appends($appends);
    }
}
