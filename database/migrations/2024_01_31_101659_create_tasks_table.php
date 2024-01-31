<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
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
            $table->string('name')->index();
            $table->text('description')->nullable();
            $table->boolean('is_archived')->default(false)->index();
            $table->integer('priority_level')->index()->default(0);
            $table->unsignedBigInteger('client_id')->index();
            $table->unsignedBigInteger('client_project_id')->index();
            $table->unsignedBigInteger('board_id')->index();
            $table->timestamps();
            $table->foreign('client_project_id')->references('id')->on('client_projects');
            $table->foreign('client_id')->references('id')->on("clients");
            $table->foreign('board_id')->references('id')->on('boards')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('tasks');
    }
};
