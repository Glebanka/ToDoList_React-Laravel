<?php

namespace Database\Factories;

use App\Models\Task;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    protected $model = Task::class;

    public function definition()
    {
      return [
        'title' => $this->faker->sentence,
        'description' => $this->faker->paragraph,
        'completed' => false,
        'created_at' => $this->faker->dateTimeBetween('-1 year', 'now'),
      ];
    }
}
