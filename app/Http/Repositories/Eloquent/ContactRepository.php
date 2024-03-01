<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\ContactContract;
use App\Models\Contact;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;

class ContactRepository extends Repository implements ContactContract
{

    public function getContacts(): Builder|QueryBuilder
    {
        return $this->queryPipeline();
    }

    protected function model(): Builder
    {
        return Contact::query();
    }

    public function setPipelines(array $pipes = []): static
    {
        $this->setThroughClasses($pipes);
        return $this;
    }
}
