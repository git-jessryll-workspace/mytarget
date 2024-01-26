<?php

namespace App\Http\Controllers\Project;

use App\Http\Controllers\Controller;
use App\Http\Requests\Project\CreateProjectRequest;
use App\Models\ClientProject;
use Illuminate\Http\Request;

class CreateProjectController extends Controller
{
    public function __invoke(CreateProjectRequest $request)
    {
        $data = [
            'project_name' => $request->validated('project_name'),
            'description' => $request->validated('description'),
            'active' => $request->validated('active'),
            'client_id' => $request->validated('client_id')
        ];
        ClientProject::query()->create($data);

        return redirect()->route('projects.index');
    }
}
