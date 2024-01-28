<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $contacts = Contact::query()->where('user_id', auth()->id())->paginate(50);
        return Inertia::render('Contact', ['contacts' => $contacts]);
    }
}
