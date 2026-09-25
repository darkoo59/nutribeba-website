<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Attributes\Fillable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\HasMany;

#[Fillable(['title', 'slug', 'description', 'price', 'thumbnail', 'google_drive_id'])]
class Course extends Model
{
    public function lessons(): BelongsToMany
    {
        return $this->belongsToMany(Lesson::class, 'course_lesson')
            ->withPivot('order')
            ->orderByPivot('order')
            ->withTimestamps();
    }

    public function sections(): HasMany
    {
        return $this->hasMany(LessonSection::class)->orderBy('order');
    }

    public function purchases(): HasMany
    {
        return $this->hasMany(Purchase::class);
    }

    public function courseAccesses(): HasMany
    {
        return $this->hasMany(CourseUserAccess::class);
    }

    public function coupons(): HasMany
    {
        return $this->hasMany(Coupon::class);
    }
}
