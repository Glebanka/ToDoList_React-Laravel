<?php

use App\Http\Controllers\TaskController;
use Illuminate\Support\Facades\Route;
use App\Models\Task;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});
Route::get('api/tasks', [TaskController::class, 'index']);

Route::get('/api/tasks/html', function () {
  $tasks = Task::all();
  return view('api', ['tasks' => $tasks]);
});//возращает html где можно забирать csrf токен
Route::middleware(['web'])->group(function () {
  Route::delete('api/tasks/delete/{id}', [TaskController::class, 'delete']);
  Route::post('api/tasks', [TaskController::class, 'store']);
});
