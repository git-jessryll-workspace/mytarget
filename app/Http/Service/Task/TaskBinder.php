<?php

namespace App\Http\Service\Task;

use App\Http\Repositories\Eloquent\TaskRepository;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;

class TaskBinder
{

    public static function bindTask(string $value): Model|Collection|Builder|array|null
    {
        $relations = ['clientProject', 'board', 'client', 'acronym'];
        return (new TaskRepository())->with($relations)->findById((int)$value);
    }
}
