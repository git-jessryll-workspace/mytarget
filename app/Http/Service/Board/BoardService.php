<?php

namespace App\Http\Service\Board;

use App\Http\Repositories\Contract\BoardContract;

class BoardService
{
    /**
     * @param BoardContract $boardRepository
     */
    public function __construct(
        protected readonly BoardContract $boardRepository
    )
    {
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data): mixed
    {
        return $this->boardRepository->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data): mixed
    {
        return $this->boardRepository->update($id, $data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->boardRepository->delete($id);
    }

    public function findById(int $id)
    {
        return $this->boardRepository->findById($id);
    }
}
