<?php

use App\Http\Controllers\Task\ShowTaskController;
use App\Http\Controllers\Task\TaskController;
use Illuminate\Support\Facades\Route;

Route::prefix('tasks')->middleware('auth')->group(function () {
    Route::get('/', TaskController::class)->name('tasks.index');
    Route::prefix('{task}')->group(function () {
        Route::get('/', ShowTaskController::class)->name('tasks.show');
    });
});
