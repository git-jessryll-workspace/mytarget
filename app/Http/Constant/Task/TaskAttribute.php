<?php

namespace App\Http\Constant\Task;

abstract class TaskAttribute
{
    protected static $MAP = [];

    /**
     * @param $value
     * @return bool|int|string
     */
    public static function getMaskValue($value): bool|int|string
    {
        return array_search($value, static::$MAP) ?? 'Unknown';
    }

    /**
     * @param $valueName
     * @return mixed
     */
    public static function getOriginalValue($valueName): mixed
    {
        return static::$MAP[$valueName] ?? 0;
    }
}
