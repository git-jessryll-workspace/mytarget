<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\TaskContract;
use App\Models\Task;
use Illuminate\Database\Eloquent\Builder;

class TaskRepository extends Repository implements TaskContract
{
    public function __construct()
    {
        parent::__construct(new Task());
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
