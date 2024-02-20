<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ClientProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_name',
        'description',
        'active',
        'client_id'
    ];

    public function client()
    {
        return $this->belongsTo(Client::class);
    }

    public function boards()
    {
        return $this->hasMany(Board::class);
    }

    public function acronym()
    {
        return $this->hasOne(Acronym::class, 'client_project_id');
    }
}
