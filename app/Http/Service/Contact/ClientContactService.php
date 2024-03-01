<?php

namespace App\Http\Service\Contact;

use App\Http\Repositories\Pipelines\Query\Contact\ClientContactQueryListPipe;
use App\Http\Repositories\Pipelines\Query\Contact\FilterByClientIdPipe;
use App\Http\Repositories\Pipelines\Query\Contact\SearchNameEmailPipe;
use App\Http\Repositories\Pipelines\Query\Contact\SortByContactNamePipe;
use Illuminate\Contracts\Pagination\LengthAwarePaginator;

class ClientContactService extends ContactService
{
    /**
     * @param int $clientId
     * @param array $appends
     * @return LengthAwarePaginator
     */
    public function getContacts(int $clientId, array $appends = []): \Illuminate\Contracts\Pagination\LengthAwarePaginator
    {
        $request = request();
        $request['search_query'] = request('search_query_contact') ?? "";
        return $this->contactRepository->setPipelines([
            ClientContactQueryListPipe::class,
            new FilterByClientIdPipe($clientId),
            SearchNameEmailPipe::class,
            SortByContactNamePipe::class
        ])
            ->getContacts()
            ->paginate(perPage: 50, pageName: 'contact_page')
            ->appends($appends);
    }
}
