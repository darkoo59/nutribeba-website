<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('course_lesson', function (Blueprint $table) {
            $table->foreignId('section_id')->nullable()->constrained('lesson_sections')->nullOnDelete()->after('lesson_id');
        });
    }

    public function down(): void0
    {
        Schema::table('course_lesson', function (Blueprint $table) {
            $table->dropForeign(['section_id']);
            $table->dropColumn('section_id');
        });
    }
};
