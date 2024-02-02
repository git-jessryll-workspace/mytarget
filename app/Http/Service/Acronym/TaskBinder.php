<?php

namespace App\Http\Service\Acronym;

use App\Models\Task;
use Illuminate\Support\Facades\Route;

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
