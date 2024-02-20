<?php


use App\Http\Controllers\Board\CreateBoardController;
use Illuminate\Support\Facades\Route;

Route::prefix('boards')->middleware('auth')->group(function() {
   Route::post('/', CreateBoardController::class)->name('boards.store');
   Route::prefix('{board}')->group(function() {

   });
});
