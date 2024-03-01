<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\ClientContract;
use App\Models\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;

class ClientRepository extends Repository implements ClientContract
{

    /**
     * @return Builder|QueryBuilder
     */
    public function getClients(): Builder|QueryBuilder
    {
        return $this->queryPipeline();
    }

    /**
     * @return Builder
     */
    protected function model(): Builder
    {
        return Client::query();
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
