<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Client;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ClientController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $query = Client::query()->where('user_id', auth()->id());
        if ($request->has('search_query')) {
            $search = $request->get('search_query');
            $query->where('name', 'LIKE', "%{$search}%");
        }
        return Inertia::render('Client', [
            'clients' => $query->orderBy('updated_at', 'desc')->paginate(50),
            'search_query' => $request->get('search_query') ?? ''
        ]);
    }
}
