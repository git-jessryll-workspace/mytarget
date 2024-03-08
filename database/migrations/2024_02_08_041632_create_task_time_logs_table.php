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
        Schema::create('task_time_logs', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('task_id');
            $table->unsignedBigInteger('user_id')->nullable();
            $table->unsignedBigInteger('client_id');
            $table->unsignedBigInteger('client_project_id');
            $table->text('body')->nullable();
            $table->string('time_log')->index();
            $table->timestamps();
            $table->foreign('task_id')->references('id')->on('tasks')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users');
            $table->foreign('client_id')->references('id')->on('clients');
            $table->foreign('client_project_id')->references('id')->on('client_projects');
            $table->index(['task_id', 'user_id', 'client_id', 'client_project_id'], 'task_time_logs_index');
            $table->engine = 'InnoDB';
        });
        DB::statement('ALTER TABLE task_time_logs ADD FULLTEXT fulltext_index (body, time_log)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task_time_logs');
    }
};
