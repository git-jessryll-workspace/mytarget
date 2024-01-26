<?php

namespace App\Http\Service\Client;

use Illuminate\Support\Facades\Auth;

class ClientConfig
{

    public static function querySelectionListKey()
    {
        $authPersonal = Auth::id();
        return "client_selection_list_{$authPersonal}";
    }
}
