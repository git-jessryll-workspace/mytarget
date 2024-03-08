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
        Schema::create('boards', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->integer('sort');
            $table->string('color')->default('transparent');
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('client_project_id');
            $table->boolean('is_hidden')->default(false);
            $table->timestamps();

            $table->index(['client_id', 'client_project_id', 'is_hidden', 'sort'], 'board_index');

            $table->foreign('client_id')
                ->references('id')
                ->on('clients');

            $table->foreign('client_project_id')
                ->references('id')
                ->on('client_projects')
                ->onDelete('cascade');

            $table->engine = "InnoDB";
        });

        DB::statement('ALTER TABLE boards ADD FULLTEXT fulltext_index (name)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('boards');
    }
};
