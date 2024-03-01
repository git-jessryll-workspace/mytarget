<?php

namespace App\Http\Repositories;

interface RepositoryContract
{
    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data): mixed;

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data): mixed;

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed;

    /**
     * @param int $id
     * @param array $selectColumns
     * @return mixed
     */
    public function findById(int $id, array $selectColumns = ['*']): mixed;

    /**
     * @param string|int $value
     * @param array $data
     * @param string $key
     * @return mixed
     */
    public function updateBy(string|int $value, array $data, string $key = "id"): mixed;

}
