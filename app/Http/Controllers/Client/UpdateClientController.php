<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\UpdateClientRequest;
use App\Http\Service\Client\ClientService;
use App\Models\Client;
use Illuminate\Http\RedirectResponse;

class UpdateClientController extends Controller
{
    public function __construct(
        private readonly ClientService $clientService
    )
    {
    }

    /**
     * @param Client $client
     * @param UpdateClientRequest $request
     * @return RedirectResponse
     */
    public function __invoke(Client $client, UpdateClientRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = [
            'name' => $request->validated('name'),
            'position' => $request->validated('position'),
            'note' => $request->validated('note'),
            'date_started' => $request->validated('date_started'),
            'date_ended' => $request->validated('date_ended'),
            'active' => $request->validated('active')
        ];

        $this->clientService->update($client->id, $data);

        return redirect()->route('clients.index');
    }
}
