<?php

namespace App\Models;

use App\Http\Service\Client\ClientConfig;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Cache;

class Client extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'active',
        'user_id',
        'note',
        'date_started',
        'date_ended',
        'position',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function () {
            Cache::forget(ClientConfig::querySelectionListKey());
        });

        static::updating(function () {
            Cache::forget(ClientConfig::querySelectionListKey());
        });

        static::deleting(function () {
            Cache::forget(ClientConfig::querySelectionListKey());
        });
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
