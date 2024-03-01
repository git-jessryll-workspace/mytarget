<?php

namespace App\Http\Service\ClientProject;

use App\Http\Repositories\Pipelines\Query\ClientProject\FilterByClientIdPipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\SearchProjectNamePipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\SortByActivePipe;
use App\Http\Repositories\Pipelines\Query\ClientProject\SortByUpdatedAtPipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ClientProjectService extends ProjectService
{
    /**
     * @param int $clientId
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getProjects(int $clientId, array $appends = []): LengthAwarePaginator
    {
        return $this->clientProjectRepository
            ->setPipelines([
                new FilterByClientIdPipe($clientId),
                SearchProjectNamePipe::class,
                SortByActivePipe::class,
                SortByUpdatedAtPipe::class,
            ])
            ->getClientProjects()
            ->paginate(perPage: 50, pageName: 'project_page')
            ->appends($appends);
    }
}
