<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\ClientContract;
use App\Models\Client;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;

class ClientRepository extends Repository implements ClientContract
{
    public function __construct(Client $client)
    {
        parent::__construct($client);
    }

    /**
     * @return Builder|QueryBuilder
     */
    public function getClients(): Builder|QueryBuilder
    {
        return $this->queryPipeline();
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
