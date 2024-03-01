<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Http\Service\Contact\ContactService;
use App\Models\Contact;
use Illuminate\Http\RedirectResponse;

class DeleteContactController extends Controller
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
     * @return RedirectResponse
     */
    public function __invoke(Contact $contact): \Illuminate\Http\RedirectResponse
    {
        if ($contact->user_id !== auth()->id()) {
            return redirect()->back()->withErrors([
                'error_message' => 'Not Authorized'
            ]);
        }

        $this->contactService->delete($contact->id);

        return redirect()->back()->with(['message' => 'Successfully deleted']);
    }
}
