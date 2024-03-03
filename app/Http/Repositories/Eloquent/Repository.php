<?php

namespace App\Http\Repositories\Eloquent;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Pipeline\Pipeline;

abstract class Repository
{
    /**
     * @var Model
     */
    private Model $model;

    /**
     * @param array $pipes
     * @return $this
     */
    abstract public function setPipelines(array $pipes = []): static;

    /**
     * @var array
     */
    private array $relations = [];

    /**
     * @var array
     */
    private array $throughClasses = [];

    /**
     * @param Model $model
     */
    public function __construct(Model $model)
    {
        $this->setModel($model);
    }

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
    public function create(array $data): Model|Builder
    {
        return $this->newQuery()->create($data);
    }

    /**
     * @param int $id
     * @param array $data
     * @return int
     */
    public function update(int $id, array $data): int
    {
        $item = $this->findById($id);
        return $item->update($data);
    }

    /**
     * @param int $id
     * @return mixed
     */
    public function delete(int $id): mixed
    {
        return $this->newQuery()->where('id', $id)->delete();
    }

    /**
     * @param int $id
     * @param array $selectColumns
     * @return Model|Collection|Builder|array|null
     */
    public function findById(int $id, array $selectColumns = ['*']): Model|Collection|Builder|array|null
    {
        return $this->newQuery()
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
        return $this->newQuery()->where($key, $value)->update($data);
    }

    /**
     * @return Model
     */
    protected function getModel(): Model
    {
        return $this->model;
    }

    /**
     * @param Model $model
     * @return void
     */
    protected function setModel(Model $model): void
    {
        $this->model = $model;
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


    /**
     * @return Builder
     */
    protected function queryPipeline(): Builder
    {
        return app(Pipeline::class)
            ->send($this->newQuery())
            ->through($this->getThroughClasses())
            ->thenReturn();
    }

    /**
     * @return Builder
     */
    protected function newQuery(): Builder
    {
        return $this->getModel()->newQuery();
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
