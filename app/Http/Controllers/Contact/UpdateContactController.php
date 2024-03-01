<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\UpdateContactRequest;
use App\Http\Service\Contact\ContactService;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;

class UpdateContactController extends Controller
{
    /**
     * @param ContactService $contactService
     */
    public function __construct(
        private readonly ContactService $contactService
    )
    {
    }

    /**
     * @param Contact $contact
     * @param UpdateContactRequest $request
     * @return RedirectResponse
     */
    public function __invoke(Contact $contact, UpdateContactRequest $request): RedirectResponse
    {
        $data = [
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'contact_number' => $request->validated('contact_number'),
        ];

        $this->contactService->update($contact->id, $data);

        return redirect()->back()->with(['message' => "Successfully created"]);
    }
}
