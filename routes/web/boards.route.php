<?php

use App\Http\Controllers\Board\ArchiveBoardController;
use App\Http\Controllers\Board\ChangeBoardPositionController;
use App\Http\Controllers\Board\CreateBoardController;
use App\Http\Controllers\Board\DeleteBoardController;
use App\Http\Controllers\Board\UpdateBoardController;
use App\Http\Controllers\Board\UpdateBoardNameController;
use Illuminate\Support\Facades\Route;

Route::prefix('boards')->middleware('auth')->group(function () {
   Route::post('/', CreateBoardController::class)->name('boards.store');
   Route::prefix('{board}')->group(function () {
      Route::put('/', UpdateBoardController::class)->name('boards.update');
      Route::delete('/', DeleteBoardController::class)->name('boards.destroy');
   });
});

Route::middleware('auth')->group(function() {
   Route::prefix('board-position')->group(function () {
      Route::patch('/', ChangeBoardPositionController::class)->name('boards.position');
   });
   Route::prefix('update-board-name')->group(function() {
      Route::patch('/', UpdateBoardNameController::class)->name('boards.name');
   });
   Route::prefix('board-archive')->group(function() {
      Route::patch('/', ArchiveBoardController::class)->name('boards.archive');
   });
});
