<?php

namespace App\Services;

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Storage;

class GoogleDriveService
{
    /**
     * Traži lokalno keširan fajl pod bilo kojom od datih ekstenzija.
     * Ne preuzima ništa sa Google Drive-a - ako fajl ne postoji lokalno, vraća null i loguje.
     *
     * @param  array<string>  $extensions
     * @return array{path: string, extension: string}|null
     */
    public function resolveCachedFile(string $fileId, string $folder, array $extensions): ?array
    {
        foreach ($extensions as $extension) {
            $relativePath = "{$folder}/{$fileId}.{$extension}";

            if (Storage::disk('local')->exists($relativePath)) {
                return [
                    'path' => Storage::disk('local')->path($relativePath),
                    'extension' => $extension,
                ];
            }
        }

        Log::warning("Lokalni fajl nije pronađen za Google Drive ID {$fileId}", [
            'folder' => $folder,
            'expected_extensions' => $extensions,
        ]);

        return null;
    }
}