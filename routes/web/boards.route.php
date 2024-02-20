<?php


use App\Http\Controllers\Board\CreateBoardController;
use App\Http\Controllers\Board\DeleteBoardController;
use App\Http\Controllers\Board\UpdateBoardController;
use Illuminate\Support\Facades\Route;

Route::prefix('boards')->middleware('auth')->group(function () {
   Route::post('/', CreateBoardController::class)->name('boards.store');
   Route::prefix('{board}')->group(function () {
      Route::put('/', UpdateBoardController::class)->name('boards.update');
      Route::delete('/', DeleteBoardController::class)->name('boards.destroy');
   });
});
