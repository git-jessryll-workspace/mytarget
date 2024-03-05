<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\Client;
use App\Models\ClientProject;
use App\Models\Contact;
use App\Models\Service;
use App\Models\Task;
use App\Models\TaskTimeLog;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       \App\Models\User::factory(10)->create();

       Client::factory(8000)->create();
       Service::factory(20)->create();
       ClientProject::factory(20)->create();
       Contact::factory(20)->create();
       $clientContactsData = [];
       DB::table('contacts')->get()->each(function ($contact) use (&$clientContactsData) {
           $clientContactsData[] = [
               'contact_id' => $contact->id,
               'client_id' => 1,
               'created_at' => now(),
               'updated_at' => now(),
           ];
       });

       DB::table('client_contacts')->insert($clientContactsData);

       $boardNames = [
           'New',
           'Pending',
           'Inprogress',
           'Done',
       ];
       

       Task::factory(30)->create();
        TaskTimeLog::factory(30)->create();
    }
}
