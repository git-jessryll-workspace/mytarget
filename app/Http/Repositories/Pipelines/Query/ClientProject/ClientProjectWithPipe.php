<?php

namespace App\Http\Repositories\Pipelines\Query\ClientProject;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ClientProjectWithPipe
{
    public function handle(Builder $query, \Closure $next)
    {
        return $next($query->with([
            'client' => function (BelongsTo $query) {
                $query->select([
                    'clients.id',
                    'clients.name',
                    'clients.user_id'
                ]);
            }
        ]));
    }
}
