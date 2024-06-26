<?php

namespace Database\Factories;

use App\Models\ClientProject;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\ClientProject>
 */
class ClientProjectFactory extends Factory
{
    protected $model = ClientProject::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'project_name' => $this->faker->windowsPlatformToken,
            'description' => $this->faker->paragraph,
            'active' => $this->faker->numberBetween(0, 1),
            // 'client_id' => $this->faker->numberBetween(1, 20)
            'client_id' => 1,
        ];
    }
}
