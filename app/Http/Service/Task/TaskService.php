<?php

namespace App\Http\Service\Task;

use App\Http\Repositories\Contract\TaskContract;

class TaskService
{
    public function __construct(
        protected readonly TaskContract $taskRepository
    )
    {
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data): mixed
    {
        return $this->taskRepository->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data): mixed
    {
        return $this->taskRepository->update($id, $data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->taskRepository->delete($id);
    }
}
