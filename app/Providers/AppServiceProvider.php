<?php

namespace App\Providers;

use App\Hashing\WordPressBcryptHasher;
use App\Mail\VerifyEmail;
use Illuminate\Auth\Notifications\VerifyEmail as VerifyEmailNotification;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        //
    }

    public function boot(): void
    {
        Hash::extend('wordpress', function ($app) {
            return new WordPressBcryptHasher($app['config']['hashing.bcrypt'] ?? []);
        });

        Vite::prefetch(concurrency: 3);

        VerifyEmailNotification::toMailUsing(function ($notifiable, $url) {
            return (new VerifyEmail($url, $notifiable->name ?? ''))
                ->to($notifiable->email);
        });
    }
}