<?php

namespace App\Http\Service\ClientProject;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use App\Http\Repositories\Eloquent\ClientProjectRepository;

class ClientProjectBinder
{
    /**
     * @param string $value
     * @return Model|Builder
     */
    public static function bindClientProject(string $value): Model|Builder
    {
        return (new ClientProjectRepository())
            ->with([
                'boards' => function ($query) {
                    $query->where('is_hidden', false);
                }, 'client', 'acronym'
            ])
            ->findById((int)$value);

    }
}
