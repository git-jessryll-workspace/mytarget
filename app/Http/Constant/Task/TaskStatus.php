<?php

namespace App\Http\Constant\Task;

class TaskStatus extends TaskAttribute
{
    /**
     * @var int[]
     */
    protected static $MAP = [
        "Todo" => 0,
        "In Progress" => 1,
        "Done" => 2,
        "Backlog" => 3,
        "Canceled" => 4,
    ];
}
