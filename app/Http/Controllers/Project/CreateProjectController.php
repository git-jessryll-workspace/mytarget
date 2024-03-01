<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\CreateProjectRequest;
use App\Http\Service\ClientProject\ProjectService;
use Illuminate\Http\RedirectResponse;

class CreateProjectController extends Controller
{

    /**
     * @param ProjectService $projectService
     */
    public function __construct(
        private readonly ProjectService $projectService
    )
    {
    }

    /**
     * @param CreateProjectRequest $request
     * @return RedirectResponse
     */
    public function __invoke(CreateProjectRequest $request): RedirectResponse
    {
        $data = [
            'project_name' => $request->validated('project_name'),
            'description' => $request->validated('description'),
            'active' => $request->validated('active'),
            'client_id' => $request->validated('client_id')
        ];

        $this->projectService->create($data);

        return redirect()->route('projects.index');
    }
}
