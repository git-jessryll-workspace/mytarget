<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\UpdateContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class UpdateContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Contact $contact, UpdateContactRequest $request)
    {
        $data = [
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'contact_number' => $request->validated('contact_number'),
        ];

        $contact->fill($data);
        $contact->save();
        return redirect()->back()->with(['message' => "Successfully created"]);
    }
}
