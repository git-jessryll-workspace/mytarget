<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Http\Service\Client\ClientConfig;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\DB;

class ClientSelectController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $clients = Cache::remember(ClientConfig::querySelectionListKey(), 120, function () {
            return DB::table('clients')
                ->select(['clients.name', 'clients.id', 'clients.active'])
                ->where('user_id', auth()->id())
                ->get();
        });
        return response()->json(['clients' => $clients]);
    }
}
