<?php

namespace App\Observers;

use App\Http\Service\Acronym\AcronymService;
use App\Models\ClientProject;

class ClientProjectObserver
{
    /**
     * Handle the ClientProject "created" event.
     */
    public function created(ClientProject $clientProject): void
    {
        AcronymService::generateClientProject($clientProject, auth()->id());
    }

    /**
     * Handle the ClientProject "updated" event.
     */
    public function updated(ClientProject $clientProject): void
    {
    }

    /**
     * Handle the ClientProject "deleted" event.
     */
    public function deleted(ClientProject $clientProject): void
    {
        //
    }

    /**
     * Handle the ClientProject "restored" event.
     */
    public function restored(ClientProject $clientProject): void
    {
        //
    }

    /**
     * Handle the ClientProject "force deleted" event.
     */
    public function forceDeleted(ClientProject $clientProject): void
    {
        //
    }
}
