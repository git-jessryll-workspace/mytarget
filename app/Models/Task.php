<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'is_archived',
        'priority_level',
        'client_id',
        'client_project_id',
        'board_id'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function clientProject()
    {
        return $this->belongsTo(ClientProject::class);
    }

    public function board()
    {
        return $this->belongsTo(Board::class);
    }

    public function acronym()
    {
        return $this->hasOne(Acronym::class, 'task_id');
    }
}
