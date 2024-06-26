<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('tasks', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description')->nullable();
            $table->boolean('is_archived')->default(false);
            $table->integer('priority_level')->default(0);
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('client_project_id');
            $table->unsignedBigInteger('board_id')->nullable();
            $table->integer('task_status')->default(0);
            $table->date('due_date')->nullable();
            $table->timestamps();

            $table->foreign('client_project_id')
                ->references('id')
                ->on('client_projects');

            $table->foreign('client_id')
                ->references('id')
                ->on("clients");

            $table->foreign('board_id')
                ->references('id')
                ->on('boards');

            $table->index(['client_id', 'client_project_id', 'is_archived', 'priority_level'], 'task_index');

            $table->engine = "InnoDB";
        });
        DB::statement('ALTER TABLE tasks ADD FULLTEXT fulltext_index (name)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
