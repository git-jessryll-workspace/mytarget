<?php

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

require __DIR__ . '/auth.php';
require __DIR__ . '/web/profile.route.php';
require __DIR__ . '/web/clients.route.php';
require __DIR__ . '/web/projects.route.php';
require __DIR__ . '/web/contacts.route.php';
require __DIR__ . '/web/client_contacts.route.php';
require __DIR__ . '/web/utils.route.php';
require __DIR__ . '/web/tasks.route.php';
require __DIR__ . '/web/task_time_log.route.php';
require __DIR__ . '/web/boards.route.php';
