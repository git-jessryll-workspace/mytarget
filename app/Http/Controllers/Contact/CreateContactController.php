<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Requests\Contact\CreateContactRequest;
use App\Http\Service\Contact\ContactService;
use Illuminate\Http\RedirectResponse;

class CreateContactController extends Controller
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
     * @param CreateContactRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateContactRequest $request): \Illuminate\Http\RedirectResponse
    {
        $data = [
            'name' => $request->validated('name'),
            'email' => $request->validated('email'),
            'contact_number' => $request->validated('contact_number'),
            'user_id' => auth()->id()
        ];

        $this->contactService->create($data);

        return redirect()->route('contacts.index');
    }
}
