<?php

namespace App\Hashing;

use Illuminate\Hashing\BcryptHasher;

class WordPressBcryptHasher extends BcryptHasher
{
    protected const WP_PREFIX = '$wp';

    protected const WP_KEY = 'wp-sha384';

    public function check($value, $hashedValue, array $options = []): bool
    {
        if (empty($hashedValue)) {
            return false;
        }

        if (str_starts_with($hashedValue, self::WP_PREFIX)) {
            $bcryptHash = substr($hashedValue, strlen(self::WP_PREFIX));

            $prehashed = base64_encode(
                hash_hmac('sha384', trim($value), self::WP_KEY, true)
            );

            return parent::check($prehashed, $bcryptHash, $options);
        }

        return parent::check($value, $hashedValue, $options);
    }

    public function needsRehash($hashedValue, array $options = []): bool
    {
        if (str_starts_with($hashedValue, self::WP_PREFIX)) {
            return true;
        }

        return parent::needsRehash($hashedValue, $options);
    }
}
