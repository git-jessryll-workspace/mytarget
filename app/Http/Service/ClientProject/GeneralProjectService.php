<?php

namespace App\Http\Service\ClientProject;

use App\Http\Repositories\Pipelines\Query\ClientProject\ClientProjectWithPipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\FilterByClientAuthIdPipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\SearchNamePipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\SortByActivePipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\SortByUpdatedAtPipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GeneralProjectService extends ProjectService
{

    /**
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getProjects(array $appends = []): LengthAwarePaginator
    {
        return $this->clientProjectRepository
            ->setPipelines([
                ClientProjectWithPipe::class,
                FilterByClientAuthIdPipe::class,
                SearchNamePipe::class,
                SortByActivePipe::class,
                SortByUpdatedAtPipe::class,
            ])
            ->getClientProjects()
            ->paginate(50)
            ->appends($appends);
    }
}
