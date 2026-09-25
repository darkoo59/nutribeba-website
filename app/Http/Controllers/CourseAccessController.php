<?php

namespace App\Http\Controllers;

use App\Models\Lesson;
use App\Services\GoogleDriveService;

class CourseAccessController extends Controller
{
    protected GoogleDriveService $driveService;

    private const VIDEO_MIME_TYPES = [
        'mp4' => 'video/mp4',
        'mov' => 'video/quicktime',
    ];

    private const IMAGE_MIME_TYPES = [
        'jpg' => 'image/jpeg',
        'jpeg' => 'image/jpeg',
        'png' => 'image/png',
    ];

    public function __construct(GoogleDriveService $driveService)
    {
        $this->driveService = $driveService;
    }

    public function play(Lesson $lesson)
    {
        $user = auth()->user();
        $hasAccess = $lesson->courses()
            ->whereHas('courseAccesses', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->exists();
    
        if (! $hasAccess) {
            abort(403, 'Nemate pristup ovom kursu.');
        }
    
        if ($lesson->type !== 'video' || ! $lesson->google_drive_file_id) {
            abort(404, 'Video nije pronađen.');
        }
    
        $file = $this->driveService->resolveCachedFile($lesson->google_drive_file_id, 'video-cache', ['mp4', 'mov']);
    
        if (! $file) {
            abort(404, 'Video još nije spreman. Pokušajte ponovo kasnije.');
        }
    
        return response()->file($file['path'], [
            'Content-Type' => self::VIDEO_MIME_TYPES[$file['extension']] ?? 'application/octet-stream',
            'Cache-Control' => 'private, max-age=3600',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }
    
    public function readPdf(Lesson $lesson)
    {
        $user = auth()->user();
        $hasAccess = $lesson->courses()
            ->whereHas('courseAccesses', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->exists();
    
        if (! $hasAccess) {
            abort(403, 'Nemate pristup ovom kursu.');
        }
    
        if ($lesson->type !== 'pdf' || ! $lesson->google_drive_file_id) {
            abort(404, 'PDF fajl nije pronađen.');
        }
    
        $file = $this->driveService->resolveCachedFile($lesson->google_drive_file_id, 'pdf-cache', ['pdf']);
    
        if (! $file) {
            abort(404, 'PDF fajl još nije spreman. Pokušajte ponovo kasnije.');
        }
    
        return response()->file($file['path'], [
            'Content-Type' => 'application/pdf',
            'Cache-Control' => 'no-cache, no-store, must-revalidate, private',
            'Pragma' => 'no-cache',
            'Expires' => '0',
            'Content-Disposition' => 'inline; filename="'.$lesson->slug.'.pdf"',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }
    
    public function readImage(Lesson $lesson)
    {
        $user = auth()->user();
        $hasAccess = $lesson->courses()
            ->whereHas('courseAccesses', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->exists();
    
        if (! $hasAccess) {
            abort(403, 'Nemate pristup ovom kursu.');
        }
    
        if ($lesson->type !== 'image' || ! $lesson->google_drive_file_id) {
            abort(404, 'Slika nije pronađena.');
        }
    
        $file = $this->driveService->resolveCachedFile($lesson->google_drive_file_id, 'image-cache', ['jpg', 'jpeg', 'png']);
    
        if (! $file) {
            abort(404, 'Slika još nije spremna. Pokušajte ponovo kasnije.');
        }
    
        return response()->file($file['path'], [
            'Content-Type' => self::IMAGE_MIME_TYPES[$file['extension']] ?? 'application/octet-stream',
            'Cache-Control' => 'no-cache, no-store, must-revalidate, private',
            'Pragma' => 'no-cache',
            'Expires' => '0',
            'Content-Disposition' => 'inline; filename="'.$lesson->slug.'.'.$file['extension'].'"',
            'X-Content-Type-Options' => 'nosniff',
        ]);
    }

    public function dashboard()
    {
        $courses = auth()->user()->courses()->with('lessons')->get();

        return inertia('Dashboard/Courses', [
            'courses' => $courses,
        ]);
    }

        public function player(Lesson $lesson)
    {
        $user = auth()->user();
        $hasAccess = $lesson->courses()
            ->whereHas('courseAccesses', function ($query) use ($user) {
                $query->where('user_id', $user->id);
            })
            ->exists();
    
        if (! $hasAccess) {
            return redirect()->route('shop.show', $lesson->courses->first()?->slug);
        }
    
        $course = $lesson->courses->first();
        $course->load([
            'sections.lessons' => function ($query) {
                $query->orderBy('course_lesson.order');
            },
            'lessons' => function ($query) {
                $query->orderBy('course_lesson.order');
            },
        ]);
    
        $progress = $user->progress()->where('lesson_id', $lesson->id)->first();
    
        $videoEmbedUrl = null;
    
        if ($lesson->type === 'video' && $lesson->bunny_video_id) {
            $videoEmbedUrl = $this->buildBunnyEmbedUrl($lesson->bunny_video_id);
        }
    
        return inertia('CoursePlayer/Index', [
            'lesson' => array_merge($lesson->toArray(), ['videoEmbedUrl' => $videoEmbedUrl]),
            'course' => $course,
            'isCompleted' => (bool) $progress?->completed_at,
        ]);
    }
    
    protected function buildBunnyEmbedUrl(string $videoId): string
    {
        $libraryId = config('services.bunny.library_id');
        $securityKey = config('services.bunny.security_key');
        $expires = time() + 10800; // 3 sata
    
        $token = hash('sha256', $securityKey.$videoId.$expires);
    
        return "https://iframe.mediadelivery.net/embed/{$libraryId}/{$videoId}?token={$token}&expires={$expires}";
    }

    public function complete(Lesson $lesson)
    {
        auth()->user()->progress()->updateOrCreate(
            ['lesson_id' => $lesson->id],
            ['completed_at' => now()]
        );

        return back();
    }
}