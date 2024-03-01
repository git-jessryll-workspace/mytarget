<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Service\Client\ClientService;
use App\Models\Client;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;

class DeleteClientController extends Controller
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
     * @param Client $client
     * @param Request $request
     * @return RedirectResponse
     * @throws ValidationException
     */
    public function __invoke(Client $client, Request $request): \Illuminate\Http\RedirectResponse
    {
        if ($request->user()->id !== $client->user_id) {
            throw ValidationException::withMessages(['error_message' => "Not Authorized"]);
        }

        $this->clientService->delete($client->id);

        return redirect()->route('clients.index')->with(['message' => 'Client deleted']);
    }
}
