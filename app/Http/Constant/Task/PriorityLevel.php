<?php

namespace App\Http\Constant\Task;

class PriorityLevel extends TaskAttribute
{
    protected static $MAP = [
        "High" => 3,
        "Medium" => 2,
        "Low" => 1,
    ];

}
