<?php

namespace App\Http\Repositories\Pipelines\Query\Task;

use Closure;
use Illuminate\Database\Eloquent\Builder;
class TaskQueryListPipe
{
    public function handle(Builder $query, Closure $next): mixed
    {
        $query->select([
            'tasks.id',
            'tasks.name',
            'tasks.description',
            'tasks.priority_level',
            'tasks.is_archived',
            'tasks.created_at',
            'tasks.updated_at',
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

        return $next($query);
    }
}
