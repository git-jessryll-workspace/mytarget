<?php

use App\Http\Controllers\ClientContact\CreateClientContactController;
use App\Http\Controllers\ClientContact\DeleteClientContactController;
use Illuminate\Support\Facades\Route;

Route::prefix('client-contacts')->middleware('auth')->group(function() {
   Route::post('/', CreateClientContactController::class)->name('client_contacts.store');
   Route::delete('/', DeleteClientContactController::class)->name('client_contacts.destroy');
});