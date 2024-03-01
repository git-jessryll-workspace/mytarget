<?php

namespace App\Http\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pipeline\Pipeline;
use Illuminate\Validation\ValidationException;

abstract class Repository
{
    /**
     * @return Builder
     */
    abstract protected function model(): Builder;

    abstract public function setPipelines(array $pipes = []): static;

    private array $relations = [];

    private array $throughClasses = [];

    /**
     * @param array $relations
     * @return $this
     */
    public function with(array $relations): static
    {
        $this->setRelations($relations);
        return $this;
    }

    /**
     * @param array $data
     * @return Model|Builder
     */
    public function create(array $data): \Illuminate\Database\Eloquent\Model|Builder
    {
        return $this->model()->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return int
     */
    public function update(int $id, array $data): int
    {
        return $this->model()->where('id', $id)->update($data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->model()->where('id', $id)->delete();
    }

    /**
     * @param int $id
     * @param array $selectColumns
     * @return Model|Collection|Builder|array|null
     */
    public function findById(int $id, array $selectColumns = ['*']): Model|Collection|Builder|array|null
    {
        return $this->model()
            ->select($selectColumns)
            ->with($this->getRelations())
            ->findOrFail($id);
    }

    /**
     * @param string|int $value
     * @param array $data
     * @param string $key
     * @return int
     */
    public function updateBy(string|int $value, array $data, string $key = "id"): int
    {
        return $this->model()->where($key, $value)->update($data);
    }

    /**
     * @return array
     */
    protected function getThroughClasses(): array
    {
        return $this->throughClasses;
    }

    /**
     * @param array $throughClasses
     * @return void
     */
    protected function setThroughClasses(array $throughClasses): void
    {
        $this->throughClasses = $throughClasses;
    }


    protected function queryPipeline(): Builder
    {
        return app(Pipeline::class)
            ->send($this->model())
            ->through($this->getThroughClasses())
            ->thenReturn();
    }

    /**
     * @return array
     */
    private function getRelations(): array
    {
        return $this->relations;
    }

    /**
     * @param array $relations
     * @return void
     */
    private function setRelations(array $relations): void
    {
        $this->relations = $relations;
    }
}
