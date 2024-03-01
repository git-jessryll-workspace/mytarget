<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\CreateClientRequest;
use App\Http\Service\Client\ClientService;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Redirect;

class CreateClientController extends Controller
{
    /**
     * @param ClientService $clientService
     */
    public function __construct(
        private readonly ClientService $clientService
    )
    {
    }

    /**
     * @param CreateClientRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateClientRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = [
            'name' => $request->validated('name'),
            'note' => $request->validated('note'),
            'date_started' => $request->validated('date_started'),
            'date_ended' => $request->validated('date_ended'),
            'user_id' => $request->user()->id,
            'position' => $request->validated('position') ?? "No Position",
            'active' => true
        ];

        $this->clientService->create($data);

        return Redirect::route('clients.index');
    }
}
