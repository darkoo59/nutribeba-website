<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        $lessons = DB::table('lessons')
            ->select('course_id', 'id as lesson_id', 'order')
            ->whereNotNull('course_id')
            ->get();

        foreach ($lessons as $lesson) {
            DB::table('course_lesson')->insert([
                'course_id' => $lesson->course_id,
                'lesson_id' => $lesson->lesson_id,
                'order' => $lesson->order,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }

        Schema::table('lessons', function (Blueprint $table) {
            $table->dropForeign(['course_id']);
            $table->dropColumn('course_id');
        });
    }

    public function down(): void
    {
        Schema::table('lessons', function (Blueprint $table) {
            $table->foreignId('course_id')->constrained()->cascadeOnDelete()->after('id');
        });

        DB::table('lessons')->update(['course_id' => DB::table('course_lesson')->value('course_id')]);
    }
};
