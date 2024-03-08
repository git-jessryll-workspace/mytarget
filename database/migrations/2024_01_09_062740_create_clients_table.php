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
        Schema::create('clients', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('note')->nullable();
            $table->boolean('active');
            $table->unsignedBigInteger('user_id');
            $table->string('position')->default('None');
            $table->date('date_started')->nullable();
            $table->date('date_ended')->nullable();
            $table->timestamps();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->index(['date_started', 'date_ended', 'active']);
            $table->engine = 'InnoDB';
        });
        DB::statement('ALTER TABLE clients ADD FULLTEXT fulltext_index (name)');
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('clients');
    }
};
