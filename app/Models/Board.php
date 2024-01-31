<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Board extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'sort',
        'client_id',
        'client_project_id',
        'is_hidden',
        'color',
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function clientProject()
    {
        return $this->belongsTo(ClientProject::class);
    }
}
