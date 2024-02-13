<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TaskTimeLog extends Model
{
    use HasFactory;

    protected $fillable = [
        'task_id',
        'user_id',
        'client_id',
        'client_project_id',
        'body',
        'time_log',
    ];
    protected $casts =[
        'created_at'=>'datetime:Y-m-d'
    ];

    protected static function booted(): void
    {
        static::creating(function (TaskTimeLog $taskTimeLog) {
            $taskTimeLog->user_id = auth()->id() ?? null;
        });
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function clientProject()
    {
        return $this->belongsTo(ClientProject::class);
    }


}
