<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\CreateContactRequest;
use App\Models\Contact;
use Illuminate\Http\Request;

class CreateContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(CreateContactRequest $request)
    {
        $data = [
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'contact_number' => $request->validated('contact_number'),
            'user_id' => auth()->id()
        ];

        Contact::query()->create($data);

        return redirect()->route('contacts.index');
    }
}
