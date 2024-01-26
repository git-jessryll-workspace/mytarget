<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Requests\Client\UpdateClientRequest;
use App\Models\Client;
use Illuminate\Http\Request;

class UpdateClientController extends Controller
{
    public function __invoke(Client $client, UpdateClientRequest $request)
    {
        $data = [
            'name' => $request->validated('name'),
            'position' => $request->validated('position'),
            'note' => $request->validated('note'),
            'date_started' => $request->validated('date_started'),
            'date_ended' => $request->validated('date_ended'),
            'active' => $request->validated('active')
        ];
        $client->fill($data);
        $client->save();

        return redirect()->route('clients.index');
    }
}
