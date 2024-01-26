<?php

use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Client\ClientSelectController;
use App\Http\Controllers\Client\CreateClientController;
use App\Http\Controllers\Client\DeleteClientController;
use App\Http\Controllers\Client\UpdateClientController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Project\CreateProjectController;
use App\Http\Controllers\Project\ProjectController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::prefix('clients')->group(function () {
        Route::get('/', ClientController::class)->name('clients.index');
        Route::post('/', CreateClientController::class)->name('clients.store');
        Route::prefix('{client}')->group(function () {
            Route::put('/', UpdateClientController::class)->name('clients.update');
            Route::delete('/', DeleteClientController::class)->name('clients.destroy');
        });
    });

    Route::prefix('utils')->group(function() {
        Route::prefix('clients')->group(function() {
            Route::get('/select', ClientSelectController::class)->name('utils.clients.select');
        });
    });

    Route::prefix('projects')->group(function () {
        Route::get('/', ProjectController::class)->name('projects.index');
        Route::post('/', CreateProjectController::class)->name('projects.store');
    });
});

require __DIR__ . '/auth.php';
