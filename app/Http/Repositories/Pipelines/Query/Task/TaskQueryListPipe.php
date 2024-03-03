<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use App\Http\Repositories\Pipelines\Query\HandleQueryPipe;
use Illuminate\Database\Eloquent\Builder;

class TaskQueryListPipe extends HandleQueryPipe
{
    /**
     * @param Builder $query
     * @return Builder
     */
    protected function queryBuilder(Builder $query): Builder
    {
        return $query->select([
            'tasks.id',
            'tasks.name',
            'tasks.description',
            'tasks.priority_level',
            'tasks.is_archived',
            'tasks.task_status',
            'tasks.created_at',
            'tasks.updated_at',
            'acronyms.counter AS acronym_counter',
            'acronyms.counter',
            'acronyms.acronym',
            'clients.name AS client_name',
            'client_projects.project_name',
            'boards.name AS board_name',
            'boards.id AS board_id',
            'boards.is_hidden AS board_is_hidden',
        ])
            ->leftJoin('acronyms', 'tasks.id', '=', 'acronyms.task_id')
            ->leftJoin('clients', 'tasks.client_id', '=', 'clients.id')
            ->leftJoin('client_projects', 'tasks.client_project_id', '=', 'client_projects.id')
            ->leftJoin('boards', 'tasks.board_id', '=', 'boards.id');
    }
}
