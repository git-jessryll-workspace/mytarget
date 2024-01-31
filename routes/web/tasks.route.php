<?php

use App\Http\Controllers\Task\TaskController;
use Illuminate\Support\Facades\Route;

Route::prefix('tasks')->middleware('auth')->group(function() {
    Route::get('/', TaskController::class)->name('tasks.index');
});