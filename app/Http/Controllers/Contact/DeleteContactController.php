<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;

class DeleteContactController extends Controller
{
    
    public function __invoke(Contact $contact)
    {
        if ($contact->user_id !== auth()->id()) {
            return redirect()->back()->withErrors([
                'error_message' => 'Not Authorized'
            ]);
        }
        $contact->delete();

        return redirect()->back()->with(['message' => 'Successfully deleted']);
    }
}
