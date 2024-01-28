<?php

use App\Http\Controllers\Contact\ContactController;
use App\Http\Controllers\Contact\CreateContactController;
use App\Http\Controllers\Contact\DeleteContactController;
use App\Http\Controllers\Contact\UpdateContactController;
use Illuminate\Support\Facades\Route;

Route::prefix('contacts')->middleware('auth')->group(function () {
    Route::get('/', ContactController::class)->name('contacts.index');
    Route::post('/', CreateContactController::class)->name('contacts.store');
    Route::prefix('{contact}')->group(function () {
        Route::put('/', UpdateContactController::class)->name('contacts.update');
        Route::delete('/', DeleteContactController::class)->name('contacts.destroy');
    });
});