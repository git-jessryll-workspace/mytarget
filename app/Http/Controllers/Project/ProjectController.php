<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Models\ClientProject;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ProjectController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        $search = $request->get('search_query') ?? null;
        $query = ClientProject::query()
            ->with(['client' => function ($q) {
                $q->select(['clients.id', 'clients.name', 'clients.user_id']);
            }])
            ->where(function ($q1) use ($search) {
                if ($search && $search !== '') {
                    return $q1->whereHas('client', function ($q) {
                        $q->where('clients.user_id', auth()->id());
                    })->where('project_name', 'LIKE', "%{$search}%");
                }
                return $q1->whereHas('client', function ($q) {
                    $q->where('clients.user_id', auth()->id());
                });
            });

        $projects = $query
            ->orderBy('client_projects.active', 'desc')
            ->orderBy('client_projects.updated_at', 'desc')
            ->paginate(50);

        return Inertia::render('ClientProject', ['projects' => $projects]);
    }
}
