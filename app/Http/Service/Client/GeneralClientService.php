<?php

namespace App\Http\Service\Client;

use App\Http\Repositories\Pipelines\Query\Client\FilterByAuthIdPipe;
use App\Http\Repositories\Pipelines\Query\Client\SearchNamePipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GeneralClientService extends ClientService
{
    /**
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getClients(array $appends = []): LengthAwarePaginator
    {
        return $this->clientRepository
            ->setPipelines([
                FilterByAuthIdPipe::class,
                SearchNamePipe::class
            ])
            ->getClients()
            ->paginate(50)
            ->appends($appends);
    }
}
