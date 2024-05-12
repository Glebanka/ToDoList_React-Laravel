<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Task;

class TaskController extends Controller
{
    public function index()
    {
        $tasks = Task::all();
        return response()->json($tasks);
    }
    public function store(Request $request)
    {
      // Валидация данных запроса
      $validatedData = $request->validate([
        'title' => 'required|string|max:255',
        'description' => 'nullable|string',
      ]);
      
      // Создание новой задачи
      $task = new Task();
      $task->title = $validatedData['title'];
      $task->description = $validatedData['description'] ?? null;
      $task->save();
      
      // Возвращаем созданную задачу в качестве ответа
      return response()->json($task, 201);
    }
    public function delete(Request $request, $id)
    {
        $task = Task::find($id);

        if (!$task) {
            return response()->json(['error' => 'Task not found'], 404);
        }

        $task->delete();

        return response()->json(['message' => 'Task deleted successfully']);
    }
  }
