# NutriBeba Website

A modern course platform built with Laravel, Inertia.js, and React. NutriBeba provides a complete learning management system for courses with video content delivery via Google Drive integration.

## 🚀 Features

- **Public Pages**: Home, About, Services, Contact
- **Authentication System**: Registration, Login, Email Verification, Password Reset
- **User Dashboard**: Personalized course overview and progress tracking
- **Course Management**: Courses with lessons, sections, and structured content
- **Purchase System**: Course purchases with coupon support
- **Video Content**: Bunny.net integration for seamless video delivery
- **Other Content**: Google Drive API integration
- **Access Control**: Time-limited course access with automatic expiration
- **Progress Tracking**: Lesson completion and user progress monitoring

## 🛠️ Tech Stack

### Backend
- **Laravel 13.x** - PHP framework
- **PHP 8.3+** - Programming language
- **Laravel Sanctum** - API authentication
- **SQLite/MySQL/PostgreSQL** - Database

### Frontend
- **React 18** - UI library
- **Inertia.js 2.x** - SPA adapter
- **Tailwind CSS 3.x** - Styling
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Headless UI** - Accessible components

### Integrations
- **Google Drive API** - Storage and delivery
- **Bynny.net API** - Video torage and delivery
- **WordPress Password Hashing** - Legacy user migration

## 📸 Screenshots

### Home Page
![Home Page](docs/screenshots/home.png)

### Course Catalog
![Courses](docs/screenshots/courses.png)

### Course Player
![Course Player](docs/screenshots/course-player.png)

### QA Page
![Dashboard](docs/screenshots/dashboard.png)

### Authentication
![Login](docs/screenshots/login.png) ![Register](docs/screenshots/register.png)

## 📦 Installation

### Prerequisites
- PHP 8.3+
- Composer
- Node.js 18+
- npm or bun

### Setup

```bash
# Clone the repository
git clone https://github.com/darkoo59/nutribeba-website.git
cd nutribeba-website

# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install --ignore-scripts

# Environment setup
cp .env.example .env
php artisan key:generate

# Database setup
php artisan migrate --force

# Build assets
npm run build

# Start development server
composer dev
```

### Environment Variables

```env
APP_NAME="Nutri Beba"
APP_ENV=dev
APP_KEY=base64:1xGFWfG3dHDKGzFdHzKfgSSeGG4FKDJgfdGE442fFGe=
APP_DEBUG=false
APP_URL=https://localhost:8080

APP_LOCALE=sr
APP_FALLBACK_LOCALE=en
APP_FAKER_LOCALE=sr_RS 

APP_MAINTENANCE_DRIVER=file
# APP_MAINTENANCE_STORE=database

# PHP_CLI_SERVER_WORKERS=4

BCRYPT_ROUNDS=12

HASH_DRIVER=wordpress

LOG_CHANNEL=stack
LOG_STACK=single
LOG_DEPRECATIONS_CHANNEL=null
LOG_LEVEL=error

DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_DATABASE=nutribeb_website
DB_USERNAME=nutribeb_admin
DB_PASSWORD=c,fuP@dUz)dxOSag

SESSION_DRIVER=database
SESSION_LIFETIME=120
SESSION_ENCRYPT=false
SESSION_PATH=/
SESSION_DOMAIN=null
SESSION_SAME_SITE=none
SESSION_SECURE_COOKIE=true

BROADCAST_CONNECTION=log
FILESYSTEM_DISK=local
QUEUE_CONNECTION=database

CACHE_STORE=database
# CACHE_PREFIX=

MAIL_MAILER=smtp
MAIL_SCHEME=null
MAIL_HOST=smtp.gmail.com
MAIL_PORT=587
MAIL_USERNAME=test@gmail.com
MAIL_PASSWORD="test test"
MAIL_FROM_ADDRESS="test@gmail.com"
MAIL_FROM_NAME="Test"

VITE_APP_NAME="${APP_NAME}"

# --- PAYMENT INTEGRATION ---
PAYPAL_CLIENT_ID=test
PAYPAL_CLIENT_SECRET=test
PAYPAL_MODE=sandbox

RAIFFEISEN_MERCHANT_ID=test
RAIFFEISEN_TERMINAL_ID=test
RAIFFEISEN_GATEWAY_URL=test.com
RAIFFEISEN_PUBLIC_KEY=test.cert
RAIFFEISEN_NOTIFY_TESTING_IP=test


# --- GOOGLE DRIVE VIDEO STORAGE ---
GOOGLE_DRIVE_API_KEY=test
GOOGLE_DRIVE_SERVICE_ACCOUNT_JSON=

BUNNY_STREAM_LIBRARY_ID=xyz
BUNNY_STREAM_SECURITY_KEY=test
```

## 🏃 Development

```bash
# Start all services (server, queue, logs, vite)
composer dev

# Run tests
composer test

# Format code
./vendor/bin/pint
```

## 📁 Project Structure

```
app/
├── Console/Commands/       # Artisan commands (e.g., ExpireCourseAccess)
├── Http/
│   ├── Controllers/        # HTTP controllers
│   │   ├── Auth/           # Authentication controllers
│   │   └── CourseAccessController.php
│   ├── Middleware/         # Custom middleware
│   └── Requests/           # Form requests
├── Mail/                   # Mail classes
├── Models/                 # Eloquent models
│   ├── Course.php
│   ├── Lesson.php
│   ├── LessonSection.php
│   ├── Purchase.php
│   ├── Coupon.php
│   ├── CourseUserAccess.php
│   └── UserProgress.php
├── Services/               # Business logic services
│   └── GoogleDriveService.php
└── Hashing/                # Custom hashers
    └── WordPressBcryptHasher.php

resources/
├── js/
│   ├── Pages/              # Inertia pages (React components)
│   │   ├── Auth/           # Auth pages
│   │   ├── Profile/        # Profile pages
│   │   ├── Welcome.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Contact.tsx
│   │   └── Dashboard.tsx
│   ├── Components/         # Reusable React components
│   ├── Layouts/            # Page layouts
│   ├── app.tsx             # App entry point
│   └── bootstrap.ts        # Bootstrap file
└── css/                    # Styles

routes/
├── web.php                 # Web routes
├── auth.php                # Auth routes
└── console.php             # Console commands
```

## 🔐 Key Models & Relationships

| Model | Description |
|-------|-------------|
| `Course` | Main course entity with title, price, thumbnail, Google Drive ID |
| `Lesson` | Individual lessons within courses |
| `LessonSection` | Sections grouping lessons |
| `Purchase` | User course purchases |
| `Coupon` | Discount codes for courses |
| `CourseUserAccess` | Time-limited access grants |
| `UserProgress` | Lesson completion tracking |

## 📝 Available Commands

```bash
# Expire old course accesses
php artisan course:expire-access

# Display inspiring quote
php artisan inspire
```

## 🧪 Testing

```bash
# Run all tests
composer test

# Run specific test
php artisan test --filter=CourseTest
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

For support, email darko.selakovic11@gmail.com or open an issue on GitHub.

---

Built with ❤️ using Laravel, Inertia.js, and React