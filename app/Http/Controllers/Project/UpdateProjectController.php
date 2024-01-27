<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\UpdateProjectRequest;
use App\Models\ClientProject;

class UpdateProjectController extends Controller
{
    
    public function __invoke(ClientProject $clientProject, UpdateProjectRequest $request)
    {
        $data = [
            'project_name' => $request->validated('project_name'),
            'description' => $request->validated('description'),
            'client_id' => $request->validated('client_id'),
            'active' => $request->validated('active') ?? $clientProject->active,
        ];

        $clientProject->fill($data);
        $clientProject->save();

        return redirect()->back();
    }
}
