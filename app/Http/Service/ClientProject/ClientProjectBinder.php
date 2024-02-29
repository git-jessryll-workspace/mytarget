<?php

namespace App\Http\Service\ClientProject;

use App\Models\ClientProject;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

class ClientProjectBinder
{
    /**
     * @param string $value
     * @return Model|Builder
     */
    public static function bindClientProject(string $value): Model|Builder
    {
        return ClientProject::query()
            ->with(['boards' => function($query) {
                $query->where('is_hidden', false);
            }, 'client', 'acronym'])
            ->where('id', $value)
            ->firstOrFail();
    }
}
