<?php

namespace App\Http\Controllers\ClientContact;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientContact\CreateClientContactRequest;
use App\Models\ClientContact;

class CreateClientContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateClientContactRequest $request)
    {
        $data = [
            'client_id' => $request->validated('client_id'),
            'contact_id' => $request->validated('contact_id')
        ];

        ClientContact::query()->create($data);

        return redirect()->back();
    }
}
