<?php

use App\Http\Controllers\Task\ArchiveTaskController;
use App\Http\Controllers\Task\ShowTaskController;
use App\Http\Controllers\Task\TaskController;
use App\Http\Controllers\Task\UpdateTaskController;
use Illuminate\Support\Facades\Route;

Route::prefix('tasks')->middleware('auth')->group(function () {
    Route::get('/', TaskController::class)->name('tasks.index');
    Route::prefix('{task}')->group(function () {
        Route::get('/', ShowTaskController::class)->name('tasks.show');
        Route::put('/', UpdateTaskController::class)->name('tasks.update');
        Route::patch('/', ArchiveTaskController::class)->name('tasks.archive');
    });
});
