<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Http\Service\ClientProject\ProjectService;
use App\Models\ClientProject;
use Illuminate\Http\RedirectResponse;

class UpdateProjectController extends Controller
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
     * @param ClientProject $clientProject
     * @param UpdateProjectRequest $request
     * @return RedirectResponse
     */
    public function __invoke(ClientProject $clientProject, UpdateProjectRequest $request): RedirectResponse
    {
        $data = [
            'project_name' => $request->validated('project_name'),
            'description' => $request->validated('description'),
            'client_id' => $request->validated('client_id'),
            'active' => $request->validated('active') ?? $clientProject->active,
        ];

        $this->projectService->update($clientProject->id, $data);

        return redirect()->back();
    }
}
