<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\TaskContract;
use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;

class TaskRepository extends Repository implements TaskContract
{

    /**
     * @return Builder
     */
    protected function model(): Builder
    {
        return Task::query();
    }

    /**
     * @return Builder
     */
    public function getTasks(): Builder
    {
        return $this->queryPipeline();
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
