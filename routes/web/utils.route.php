<?php

use App\Http\Controllers\Client\ClientSelectController;
use Illuminate\Support\Facades\Route;

Route::prefix('utils')->middleware('auth')->group(function () {
    Route::prefix('clients')->group(function () {
        Route::get('/select', ClientSelectController::class)->name('utils.clients.select');
    });
});
