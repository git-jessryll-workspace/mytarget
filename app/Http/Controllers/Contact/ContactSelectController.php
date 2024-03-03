<?php

namespace App\Http\Controllers\Contact;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\DB;

class ContactSelectController extends Controller
{
    /**
     * @return JsonResponse
     */
    public function __invoke(): \Illuminate\Http\JsonResponse
    {
        $contacts = Contact::query()
            ->whereNotExists(function ($query) {
                $query->select(DB::raw(1))
                    ->from('client_contacts')
                    ->whereRaw('contacts.id = client_contacts.contact_id');
            })
            ->where('user_id', auth()->id())
            ->get();

        return response()->json([
            'contacts' => $contacts
        ]);
    }
}
