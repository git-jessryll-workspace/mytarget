<?php

namespace App\Providers;

use App\Http\Repositories\Contract\BoardContract;
use App\Http\Repositories\Contract\ClientContract;
use App\Http\Repositories\Contract\ClientProjectContract;
use App\Http\Repositories\Contract\ContactContract;
use App\Http\Repositories\Contract\TaskContract;
use App\Http\Repositories\Contract\TaskTimelogContract;
use App\Http\Repositories\Eloquent\BoardRepository;
use App\Http\Repositories\Eloquent\ClientProjectRepository;
use App\Http\Repositories\Eloquent\ClientRepository;
use App\Http\Repositories\Eloquent\ContactRepository;
use App\Http\Repositories\Eloquent\TaskRepository;
use App\Http\Repositories\Eloquent\TaskTimelogRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        $repositories = [
            TaskContract::class => TaskRepository::class,
            ClientProjectContract::class => ClientProjectRepository::class,
            ClientContract::class => ClientRepository::class,
            ContactContract::class => ContactRepository::class,
            BoardContract::class => BoardRepository::class,
            TaskTimelogContract::class => TaskTimelogRepository::class
        ];
        foreach ($repositories as $contract => $repository) {
            $this->app->bind($contract, $repository);
        }
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        //
    }
}
