<?php

namespace App\Http\Service\Contact;

use App\Http\Repositories\Contract\ContactContract;

class ContactService
{
    /**
     * @param ContactContract $contactRepository
     */
    public function __construct(
        protected readonly ContactContract $contactRepository
    )
    {
    }

    /**
     * @param array $data
     * @return mixed
     */
    public function create(array $data): mixed
    {
        return $this->contactRepository->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return mixed
     */
    public function update(int $id, array $data): mixed
    {
        return $this->contactRepository->update($id, $data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->contactRepository->delete($id);
    }

}
