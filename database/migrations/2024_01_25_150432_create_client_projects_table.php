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
        Schema::create('client_projects', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('client_id');
            $table->string('project_name');
            $table->string('description', 500)->nullable();
            $table->boolean('active')->default(true);
            $table->timestamps();

            $table->foreign('client_id')
            ->references('id')
                ->on('clients')
                ->onDelete('cascade');

            $table->index(['project_name', 'active']);
            $table->unique(['client_id', 'project_name']);

            $table->engine = "InnoDB";
            DB::statement('ALTER TABLE client_projects ADD FULLTEXT fulltext_index (project_name)');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('client_projects');
    }
};
