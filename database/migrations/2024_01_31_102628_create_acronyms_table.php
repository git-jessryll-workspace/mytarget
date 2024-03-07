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
        Schema::create('acronyms', function (Blueprint $table) {
            $table->id();
            $table->string('acronym');
            $table->integer('counter')->default(0);
            $table->string('acro_counter');
            $table->unsignedBigInteger('client_project_id')->nullable();
            $table->unsignedBigInteger('client_id')->nullable();
            $table->unsignedBigInteger('task_id')->nullable();
            $table->unsignedBigInteger('user_id')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('client_project_id')->references('id')->on('client_projects')->onDelete('cascade');
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
            $table->engine = "InnoDB";
        });
        // DB::statement('ALTER TABLE acronyms ADD acro_counter VARCHAR(255) AS (CONCAT(acronym, "-", counter))');
        // DB::statement('CREATE INDEX acro_counter_index ON acronyms(acro_counter)');
        DB::statement('ALTER TABLE acronyms ADD FULLTEXT fulltext_index (acronym, acro_counter)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('acronyms');
    }
};
