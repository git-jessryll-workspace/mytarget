<?php

namespace App\Http\Service\Task;

use App\Models\Task;

class TaskBinder
{
    public static function bindTask(string $value)
    {
        return Task::query()
            ->with(['clientProject', 'board', 'client', 'acronym'])
            ->where('id', $value)
            ->firstOrFail();
    }
}
