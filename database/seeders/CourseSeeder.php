<?php

namespace Database\Seeders;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\LessonSection;
use Illuminate\Database\Seeder;

class CourseSeeder extends Seeder
{
    public function run(): void
    {
        $course1 = Course::create([
            'title' => 'Basic Spremna za porodjaj',
            'slug' => 'basic-spremna-za-porodjaj',
            'description' => 'Sveobuhvatna priprema za porođaj - osnovni paket.',
            'price' => 140.00,
            'thumbnail' => '/images/courses/basic-porodjaj.jpg',
            'google_drive_id' => 'folder_id_1',
        ]);

        $section1 = LessonSection::create([
            'course_id' => $course1->id,
            'title' => 'Trudnoća i porođaj',
            'order' => 1,
        ]);

        $section2 = LessonSection::create([
            'course_id' => $course1->id,
            'title' => 'Dojenje',
            'order' => 2,
        ]);

        $section3 = LessonSection::create([
            'course_id' => $course1->id,
            'title' => 'Postpartum i novorođenče',
            'order' => 3,
        ]);

        $lesson1 = Lesson::create([
            'title' => 'Uvod u porođaj',
            'slug' => 'uvod-u-porodjaj',
            'description' => 'Šta očekivati u prvim fazama.',
            'google_drive_file_id' => 'video_id_1',
            'duration' => 600,
        ]);

        $lesson2 = Lesson::create([
            'title' => 'Položaji tokom trudnoće',
            'slug' => 'polozi-tokom-trudnoce',
            'description' => 'Kako da se krećete i držite za zdraviji porođaj.',
            'google_drive_file_id' => 'video_id_2',
            'duration' => 900,
        ]);

        $lesson3 = Lesson::create([
            'title' => 'Uvod u dojenje',
            'slug' => 'uvod-u-dojenje',
            'description' => 'Prve korake ka uspešnom dojenju.',
            'google_drive_file_id' => 'video_id_3',
            'duration' => 750,
        ]);

        $lesson4 = Lesson::create([
            'title' => 'Nega novorođenčeta',
            'slug' => 'nega-novorodenceta',
            'description' => 'Osnovne veštine za brigu o bebi.',
            'google_drive_file_id' => 'video_id_4',
            'duration' => 800,
        ]);

        $lesson5 = Lesson::create([
            'title' => 'E-primer: Plan ishrane za trudnoću',
            'slug' => 'e-primer-plan-ishrane',
            'description' => 'PDF vodič sa savetima za ishranu tokom trudnoće.',
            'type' => 'pdf',
            'google_drive_file_id' => 'pdf_id_1',
            'duration' => 0,
        ]);

        $section1->lessons()->attach($lesson1->id, ['order' => 1]);
        $section1->lessons()->attach($lesson2->id, ['order' => 2]);
        $section2->lessons()->attach($lesson3->id, ['order' => 1]);
        $section3->lessons()->attach($lesson4->id, ['order' => 1]);
        $section3->lessons()->attach($lesson5->id, ['order' => 2]);

        $course2 = Course::create([
            'title' => 'Premium Spremna za porodjaj',
            'slug' => 'premium-spremna-za-porodjaj',
            'description' => 'Premium paket sa dodatnim materijalima i podrškom.',
            'price' => 170.00,
            'thumbnail' => '/images/courses/premium-porodjaj.jpg',
            'google_drive_id' => 'folder_id_2',
        ]);

        $course3 = Course::create([
            'title' => 'Predavanje',
            'slug' => 'predavanje',
            'description' => 'Uživo coaching sesija i predavanje.',
            'price' => 50.00,
            'thumbnail' => '/images/courses/predavanje.jpg',
            'google_drive_id' => 'folder_id_3',
        ]);
    }
}
