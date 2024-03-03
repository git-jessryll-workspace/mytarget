<?php

namespace App\Http\Repositories\Eloquent;

use App\Http\Repositories\Contract\ContactContract;
use App\Models\Contact;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\Builder as QueryBuilder;

class ContactRepository extends Repository implements ContactContract
{
    public function __construct(Contact $contact)
    {
        parent::__construct($contact);
    }

    public function getContacts(): Builder|QueryBuilder
    {
        return $this->queryPipeline();
    }

    public function setPipelines(array $pipes = []): static
    {
        $this->setThroughClasses($pipes);
        return $this;
    }
}
