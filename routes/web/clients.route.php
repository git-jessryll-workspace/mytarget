<?php

use App\Http\Controllers\Client\ClientController;
use App\Http\Controllers\Client\CreateClientController;
use App\Http\Controllers\Client\DeleteClientController;
use App\Http\Controllers\Client\ShowClientController;
use App\Http\Controllers\Client\UpdateClientController;
use Illuminate\Support\Facades\Route;

Route::prefix('clients')->middleware('auth')->group(function () {
    Route::get('/', ClientController::class)->name('clients.index');
    Route::post('/', CreateClientController::class)->name('clients.store');
    Route::prefix('{client}')->group(function () {
        Route::get('/', ShowClientController::class)->name('clients.show');
        Route::put('/', UpdateClientController::class)->name('clients.update');
        Route::delete('/', DeleteClientController::class)->name('clients.destroy');
    });
});
