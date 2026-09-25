<?php

namespace App\Console\Commands;

use App\Models\CourseUserAccess;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Log;

class ExpireCourseAccess extends Command
{
    protected $signature = 'course-access:expire';

    protected $description = 'Remove course access records older than one year';

    public function handle(): void
    {
        $count = CourseUserAccess::where('created_at', '<', now()->subYear())->count();

        if ($count === 0) {
            $this->info('No expired course access records found.');

            return;
        }

        CourseUserAccess::where('created_at', '<', now()->subYear())->delete();

        $this->info("Expired {$count} course access record(s).");
        Log::info("Expired {$count} course access record(s) older than one year.");
    }
}
