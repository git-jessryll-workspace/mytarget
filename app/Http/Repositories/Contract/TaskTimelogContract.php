<?php

namespace App\Http\Repositories\Contract;

use App\Http\Repositories\RepositoryContract;

interface TaskTimelogContract extends RepositoryContract
{
    public function getTimelogs();
}
