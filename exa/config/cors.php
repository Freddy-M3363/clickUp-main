<?php

return [
    /*
    |--------------------------------------------------------------------------
    | Allowed Origins
    |--------------------------------------------------------------------------
    |
    | Here you may specify all of the domains that are allowed to access your
    | application.
    |
    */

    'allowed_origins' => [
        'http://localhost:3000', // Allow all origins
    ],

    /*
    |--------------------------------------------------------------------------
    | Allowed Methods
    |--------------------------------------------------------------------------
    |
    | Here you may specify all of the HTTP methods that are allowed.
    |
    */

    'allowed_methods' => [
        'GET',
        'HEAD',
        'POST',
        'PUT',
        'PATCH',
//        'DELETE',
    ],

    /*
    |--------------------------------------------------------------------------
    | Allowed Headers
    |--------------------------------------------------------------------------
    |
    | Here you may specify all of the HTTP headers that are allowed.
    |
    */

    'allowed_headers' => [
        'Origin',
        'Content-Type',
        'Accept',
        'Authorization',
        'X-Requested-With',
    ],

    /*
    |--------------------------------------------------------------------------
    | Exposed Headers
    |--------------------------------------------------------------------------
    |
    | Here you may specify which headers should be exposed to the client.
    |
    */

    'exposed_headers' => [
        'Link',
        'X-CSRF-Token',
    ],

    /*
    |--------------------------------------------------------------------------
    | Max Age
    |--------------------------------------------------------------------------
    |
    | The maximum age (in seconds) of the preflight request.
    |
    */

    'max_age' => 60 * 60 * 24, // One day
];
