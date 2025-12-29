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
        Schema::create('certificates', function (Blueprint $table) {
            $table->id();
            $table->string('no_cert')->unique();
            $table->string('nama_perusahaan');
            $table->string('nama_direktur');
            $table->text('alamat');
            $table->string('telp');
            $table->string('fax')->nullable();
            $table->string('email')->nullable();
            $table->string('npwp');
            $table->string('jasa')->nullable();
            $table->string('perdagangan')->nullable();
            $table->string('klasifikasi')->nullable();
            $table->string('berlaku')->nullable();
            $table->date('dari_tanggal')->nullable();
            $table->date('sampai_tanggal')->nullable();
            $table->string('ketua')->nullable();
            $table->string('sekretaris')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('certificates');
    }
};
