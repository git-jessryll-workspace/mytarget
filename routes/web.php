<?php

use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Client\ClientSelectController;
use App\Http\Controllers\Client\CreateClientController;
use App\Http\Controllers\Client\DeleteClientController;
use App\Http\Controllers\Client\ShowClientController;
use App\Http\Controllers\Client\UpdateClientController;
use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\Contact\CreateContactController;
use App\Http\Controllers\Contact\DeleteContactController;
use App\Http\Controllers\Contact\UpdateContactController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Project\CreateProjectController;
use App\Http\Controllers\Project\DeleteProjectController;
use App\Http\Controllers\Project\ProjectController;
use App\Http\Controllers\Project\UpdateProjectController;
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
            Route::get('/', ShowClientController::class)->name('clients.show');
            Route::put('/', UpdateClientController::class)->name('clients.update');
            Route::delete('/', DeleteClientController::class)->name('clients.destroy');
        });
    });

    Route::prefix('utils')->group(function () {
        Route::prefix('clients')->group(function () {
            Route::get('/select', ClientSelectController::class)->name('utils.clients.select');
        });
    });

    Route::prefix('projects')->group(function () {
        Route::get('/', ProjectController::class)->name('projects.index');
        Route::post('/', CreateProjectController::class)->name('projects.store');
        Route::prefix('{clientProject}')->group(function () {
            Route::put('/', UpdateProjectController::class)->name('projects.update');
            Route::delete('/', DeleteProjectController::class)->name('projects.destroy');
        });
    });

    Route::prefix('contacts')->group(function() {
        Route::get('/', ContactController::class)->name('contacts.index');
        Route::post('/', CreateContactController::class)->name('contacts.store');
        Route::prefix('{contact}')->group(function() {
            Route::put('/', UpdateContactController::class)->name('contacts.update');
            Route::delete('/', DeleteContactController::class)->name('contacts.destroy');
        });
    });
});

require __DIR__ . '/auth.php';
