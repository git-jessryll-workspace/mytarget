<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Acronym extends Model
{
    use HasFactory;

    protected $fillable = [
        'board_id',
        'client_project_id',
        'client_id',
        'acronym',
        'task_id',
        'user_id',
        'counter'
    ];

    public function board()
    {
        return $this->belongsTo(Board::class);
    }

    public function clientProject()
    {
        return $this->belongsTo(ClientProject::class);
    }

    public function task()
    {
        return $this->belongsTo(Task::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
