<?php

namespace Tests\Feature\Task;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Foundation\Testing\WithFaker;
use Tests\TestCase;

class TaskControllerTest extends TestCase
{
    use RefreshDatabase;
    /**
     * A basic feature test example.
     */
    public function test_tasks_pagination(): void
    {
        $user = User::factory()->create();

        $response = $this->actingAs($user)
            ->get('/tasks');

        $response->assertStatus(200);
        $response->assertInertia(
            fn ($page) => $page->component('Task')->has('tasks', 13)
        );
    }
}
