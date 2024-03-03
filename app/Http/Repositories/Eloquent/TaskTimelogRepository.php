<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\TaskTimelogContract;
use App\Models\TaskTimeLog;
use Illuminate\Database\Eloquent\Builder;

class TaskTimelogRepository extends Repository implements TaskTimelogContract
{

    public function __construct(TaskTimeLog $model)
    {
        parent::__construct($model);
    }

    public function setPipelines(array $pipes = []): static
    {
        $this->setThroughClasses($pipes);
        return $this;
    }

    /**
     * @return Builder
     */
    public function getTimelogs(): Builder
    {
        return $this->queryPipeline();
    }
}
