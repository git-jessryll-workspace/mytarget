<?php

namespace App\Http\Service\Acronym;

use App\Models\Acronym;
use App\Models\ClientProject;
use App\Models\Task;

class AcronymService
{

    public static function generateClientProject(ClientProject $clientProject, $orgId)
    {
        $acr = "";
        $acronym = self::getAcronym($clientProject->project_name);

        $findExistingAcronym = Acronym::query()
            ->where('acronym', $acronym)
            ->where('user_id', auth()->id())
            ->orderBy('counter', 'desc')
            ->first();

        if ($findExistingAcronym) {
            $number = $findExistingAcronym->counter + 1;
            $acr = "{$acronym}{$number}";
        }

        $acr = $acronym;

        Acronym::query()->create([
            'client_project_id' => $clientProject->id,
            'client_id' => $clientProject->client_id,
            'task_id' => null,
            'acronym' => $acr,
            'user_id' => $orgId,
            'counter' => 0,
        ]);
    }

    public static function generateTask(Task $task)
    {
        $findExistingAcronym = Acronym::query()
            ->where('client_project_id', $task->client_project_id)
            ->orderBy('counter', 'desc')
            ->first();
        
        Acronym::query()->create([
            'client_project_id' => $task->client_project_id,
            'client_id' => $task->client_id,
            'acronym' => $findExistingAcronym->acronym,
            'counter' => $findExistingAcronym->counter + 1,
            'user_id' => $findExistingAcronym->user_id,
            'task_id' => $task->id,
        ]);
    }

    private static function getAcronym($phrase)
    {
        // Split the words in the phrase
        $words = explode(' ', $phrase);

        // Initialize an empty acronym
        $acronym = '';

        // Iterate through the words and extract the first letter of each
        foreach ($words as $word) {
            $acronym .= strtoupper(substr($word, 0, 1));
        }

        return $acronym;
    }
}
