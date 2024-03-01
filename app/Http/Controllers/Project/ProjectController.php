<?php

namespace App\Http\Controllers\Project;

use Inertia\Inertia;
use Inertia\Response;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Service\ClientProject\GeneralProjectService;

class ProjectController extends Controller
{
    /**
     * @param GeneralProjectService $clientProjectService
     */
    public function __construct(
        private readonly GeneralProjectService $clientProjectService
    )
    {
    }

    /**
     * @param Request $request
     * @return Response
     */
    public function __invoke(Request $request): Response
    {
        $search = $request->get('search_query') ?? "";
        $projects = $this->clientProjectService->getProjects(['search_query' => $search]);

        return Inertia::render('ClientProject', [
            'projects' => $projects,
            'search_query' => $search
        ]);
    }
}
