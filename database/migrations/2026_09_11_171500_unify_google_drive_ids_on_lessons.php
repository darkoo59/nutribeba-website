<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('lessons', function (Blueprint $table) {
            $table->string('google_drive_file_id')->nullable()->after('description');
            $table->dropColumn(['google_drive_video_id', 'google_drive_pdf_id']);
        });
    }

    public function down(): void
    {
        Schema::table('lessons', function (Blueprint $table) {
            $table->string('google_drive_video_id')->nullable()->after('description');
            $table->string('google_drive_pdf_id')->nullable()->after('google_drive_video_id');
            $table->dropColumn('google_drive_file_id');
        });
    }
};
