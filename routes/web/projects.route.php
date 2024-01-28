<?php

use App\Http\Controllers\Project\ClientProjectController;
use App\Http\Controllers\Project\CreateProjectController;
use App\Http\Controllers\Project\DeleteProjectController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Project\UpdateProjectController;
use Illuminate\Support\Facades\Route;

Route::prefix('projects')->middleware('auth')->group(function () {
    Route::get('/', ProjectController::class)->name('projects.index');
    Route::post('/', CreateProjectController::class)->name('projects.store');
    Route::prefix('{clientProject}')->group(function () {
        Route::put('/', UpdateProjectController::class)->name('projects.update');
        Route::delete('/', DeleteProjectController::class)->name('projects.destroy');
    });
});

Route::prefix('response')->middleware('auth')->group(function () {
    Route::prefix('client-projects')->group(function () {
        Route::get('/', ClientProjectController::class)->name('client-projects.index');
    });
});
