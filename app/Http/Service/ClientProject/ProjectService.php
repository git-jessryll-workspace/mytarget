<?php

namespace App\Http\Service\ClientProject;

use App\Http\Repositories\Contract\ClientProjectContract;

class ProjectService
{
    /**
     * @param ClientProjectContract $clientProjectRepository
     */
    public function __construct(
        protected readonly ClientProjectContract $clientProjectRepository
    )
    {
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data): mixed
    {
        return $this->clientProjectRepository->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data): mixed
    {
        return $this->clientProjectRepository->update($id, $data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->clientProjectRepository->delete($id);
    }
}
