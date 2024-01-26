<?php

namespace Database\Factories;

use App\Models\Client;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Client>
 */
class ClientFactory extends Factory
{
    protected $model = Client::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->company,
            'note' => $this->faker->paragraph,
            'user_id' => 1,
            'active' => true,
            'date_started' => $this->faker->date,
            'date_ended' => now()->addMonths(4),
            'position' => $this->faker->jobTitle
        ];
    }
}
