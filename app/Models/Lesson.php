<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['title', 'slug', 'description', 'google_drive_file_id', 'type', 'duration'])]
class Lesson extends Model
{
    protected $casts = [
        'duration' => 'integer',
    ];

    public function courses(): BelongsToMany
    {
        return $this->belongsToMany(Course::class, 'course_lesson')
            ->withPivot('order')
            ->withTimestamps();
    }

    public function progress(): HasMany
    {
        return $this->hasMany(UserProgress::class);
    }
}
