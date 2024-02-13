<?php

namespace Database\Factories;

use App\Models\Task;
use App\Models\TaskTimeLog;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\TaskTimeLog>
 */
class TaskTimeLogFactory extends Factory
{
    protected $model = TaskTimeLog::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $task = Task::query()->where('id', 1)->first();
        return [
            'task_id' => $task->id,
            'user_id' => 1,
            'client_id' => $task->client_id,
            'client_project_id' => $task->client_project_id,
            'body' => $this->faker->paragraph(4),
            'time_log' => $this->faker->numberBetween(1, 5) . "h " . $this->faker->numberBetween(30, 50) . 'm'
        ];
    }
}
