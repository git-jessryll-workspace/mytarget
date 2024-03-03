<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\ClientProjectContract;
use App\Models\ClientProject;
use Illuminate\Database\Eloquent\Builder;

class ClientProjectRepository extends Repository implements ClientProjectContract
{
    public function __construct()
    {
        $clientProject = new ClientProject();
        parent::__construct($clientProject);
    }

    /**
     * @return Builder
     */
    public function getClientProjects(): Builder
    {
        return $this->queryPipeline();
    }

    /**
     * @return Builder
     */
    protected function model(): Builder
    {
        return ClientProject::query();
    }

    /**
     * @param array $pipes
     * @return $this
     */
    public function setPipelines(array $pipes = []): static
    {
        $this->setThroughClasses($pipes);
        return $this;
    }
}
