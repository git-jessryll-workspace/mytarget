<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

class ClientProject extends Model
{
    use HasFactory;

    protected $fillable = [
        'project_name',
        'description',
        'active',
        'client_id'
    ];

    /**
     * @return BelongsTo
     */
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * @return HasMany
     */
    public function boards(): HasMany
    {
        return $this->hasMany(Board::class)->orderBy('sort', 'asc');
    }

    /**
     * @return HasOne
     */
    public function acronym(): HasOne
    {
        return $this->hasOne(Acronym::class, 'client_project_id');
    }
}
