<?php

namespace App\Http\Controllers\ClientContact;

use App\Http\Controllers\Controller;
use App\Http\Requests\ClientContact\DeleteClientContactRequest;
use App\Models\ClientContact;

class DeleteClientContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(DeleteClientContactRequest $request)
    {
        $data = [
            'client_id' => $request->validated('client_id'),
            'contact_id' => $request->validated('contact_id')
        ];
        
        ClientContact::query()->where($data)->delete();

        return redirect()->back();
    }
}
