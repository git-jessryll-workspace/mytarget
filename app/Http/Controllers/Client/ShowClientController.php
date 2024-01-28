<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use App\Models\ClientContact;
use App\Models\ClientProject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ShowClientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Client $client, Request $request)
    {
        $search_query_project = $request->get('search_query_project') ?? '';
        $search_query_contact = $request->get('search_query_contact') ?? '';

        $queryContact = ClientContact::query()->select([
            'client_contacts.client_id',
            'contacts.id',
            'contacts.name',
            'contacts.email',
            'contacts.contact_number',
            'client_contacts.created_at',
        ])
            ->leftJoin('contacts', 'client_contacts.contact_id', '=', 'contacts.id');

        $queryProject = ClientProject::query()
            ->where('client_id', $client->id);

        if (!empty($search_query_project)) {
            $queryProject->where('project_name', 'LIKE', "%{$search_query_project}%");
        }

        if (!empty($search_query_contact)) {
            $queryContact->where(function ($q) use ($search_query_contact) {
                $q->where('contacts.name', 'LIKE', "%{$search_query_contact}%")
                    ->orWhere('contacts.email', 'LIKE', "%{$search_query_contact}%");
            });
        }

        $projects = $queryProject->orderBy('active', 'desc')
            ->orderBy('updated_at', 'desc')
            ->paginate(50);
        $projects->appends(['search_query_project' => $search_query_project]);

        $contacts = $queryContact->orderBy('contacts.name', 'desc')->paginate(50);
        $contacts->appends(['search_query_contact' => $search_query_contact]);
        return Inertia::render('Client/Show', [
            'client' => $client,
            'projects' => $projects,
            'contacts' => $contacts,
            'search_query_project' => $search_query_project,
            'search_query_contact' => $search_query_contact,
            'primaryId' => $client->id,
            'request_all' => $request->all()
        ]);
    }
}
