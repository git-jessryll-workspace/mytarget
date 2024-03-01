<?php

namespace App\Http\Repositories\Contract;

use App\Http\Repositories\RepositoryContract;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;

interface ClientContract extends RepositoryContract
{
    public function getClients(): Builder|QueryBuilder;
}
