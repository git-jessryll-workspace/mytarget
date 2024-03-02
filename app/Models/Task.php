<?php

namespace App\Models;

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

    public function getTaskStatusAttribute($value)
    {
        switch ($value) {
            case 1:
                return "In Progress";
            case 2:
                return "Done";
            case 3:
                return "Backlog";
            case 4:
                return "Canceled";
            default:
                return "Todo";
        }
    }

    public function getPriorityLevelAttribute($value)
    {
        switch ($value) {
            case 3:
                return "High";
            case 2:
                return "Medium";
            case 1:
                return "Low";
            default:
                return "";
        }
    }
}
