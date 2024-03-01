<?php

namespace App\Http\Service\Client;

use App\Http\Repositories\Contract\ClientContract;
use Illuminate\Database\Eloquent\Builder;

class ClientService
{
    public function __construct(
        protected readonly ClientContract $clientRepository
    )
    {
    }

    /**
     * @param array $data
     * @return Builder|mixed
     */
    public function create(array $data): mixed
    {
        return $this->clientRepository->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data): mixed
    {
        return $this->clientRepository->update($id, $data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->clientRepository->delete($id);
    }
}
