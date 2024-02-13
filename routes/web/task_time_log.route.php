<?php


use App\Http\Controllers\TaskTime\CreateTaskTimeLogController;
use App\Http\Controllers\TaskTime\DeleteTaskTimeLogController;
use App\Http\Controllers\TaskTime\TaskTimeLogController;
use App\Http\Controllers\TaskTime\UpdateTaskTimeLogController;
use Illuminate\Support\Facades\Route;

Route::prefix('task-time-logs')->middleware('auth')
    ->group(function () {
        Route::get('/', TaskTimeLogController::class)->name('task_time_logs.index');
        Route::post('/', CreateTaskTimeLogController::class)->name('task_time_logs.store');
        Route::prefix('{taskTimeLog}')->group(function() {
            Route::put('/', UpdateTaskTimeLogController::class)->name('task_time_logs.update');
            Route::delete('/', DeleteTaskTimeLogController::class)->name('task_time_logs.destroy');
        });
    });
