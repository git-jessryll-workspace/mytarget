<?php

namespace App\Models;

use App\Http\Constant\Task\PriorityLevel;
use App\Http\Constant\Task\TaskStatus;
use Illuminate\Database\Eloquent\Casts\Attribute;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\HasOne;

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
        'board_id',
        'task_status',
        'due_date',
    ];

    protected $casts = [
        'created_at' => 'date:Y-m-d'
    ];

    /**
     * @return BelongsTo
     */
    public function client(): BelongsTo
    {
        return $this->belongsTo(Client::class);
    }

    /**
     * @return BelongsTo
     */
    public function clientProject(): BelongsTo
    {
        return $this->belongsTo(ClientProject::class);
    }

    /**
     * @return BelongsTo
     */
    public function board(): BelongsTo
    {
        return $this->belongsTo(Board::class);
    }

    /**
     * @return HasOne
     */
    public function acronym(): HasOne
    {
        return $this->hasOne(Acronym::class, 'task_id');
    }

    /**
     * @return HasMany
     */
    public function timeLogs(): HasMany
    {
        return $this->hasMany(TaskTimeLog::class)->orderBy('created_at', 'desc');
    }

    protected function priorityLevel(): Attribute
    {
        return Attribute::make(
            get: fn($value) => PriorityLevel::getMaskValue($value),
            set: fn($value) => PriorityLevel::getOriginalValue($value)
        );
    }

    protected function taskStatus(): Attribute
    {
        return Attribute::make(
            get: fn($value) => TaskStatus::getMaskValue($value),
            set: fn($value) => TaskStatus::getOriginalValue($value)
        );
    }
}
