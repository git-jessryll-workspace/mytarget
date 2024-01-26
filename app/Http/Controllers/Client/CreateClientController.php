<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\CreateClientRequest;
use App\Models\Client;
use Illuminate\Support\Facades\Redirect;

class CreateClientController extends Controller
{
    public function __invoke(CreateClientRequest $request)
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

        Client::query()->create($data);
        
        return Redirect::route('clients.index');
    }
}
