<?php

namespace App\Http\Service\Contact;

use App\Http\Repositories\Pipelines\Query\Contact\FilterByAuthIdPipe;
use App\Http\Repositories\Pipelines\Query\Contact\SearchNameEmailPipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class GeneralContactService extends ContactService
{
    /**
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getContacts(array $appends = []): LengthAwarePaginator
    {
        return $this->contactRepository
            ->setPipelines([
                FilterByAuthIdPipe::class,
                SearchNameEmailPipe::class
            ])
            ->getContacts()
            ->paginate(50)
            ->appends($appends);
    }
}
