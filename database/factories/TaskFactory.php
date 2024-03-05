<?php

namespace Database\Factories;

use App\Models\ClientProject;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Task>
 */
class TaskFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $query = ClientProject::query()->where('client_id', 1)->first();
        return [
            'name' => $this->faker->sentence,
            'description' => $this->faker->paragraph,
            'is_archived' => false,
            'priority_level' => 3,
            'client_id' => 1,
            'client_project_id' => $query->id,
            'task_status' => $this->faker->numberBetween(0, 3)
        ];
    }
}
