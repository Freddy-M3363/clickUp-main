<?php

use Illuminate\Support\Facades\Route;
use app\Http\Controllers\AuthController;

Route::get('/', function () {
    return view('welcome');

});
//logout to display welcome page
Route::middleware("guest")->group(function () {
    Route::get('login', [AuthController::class, 'showLoginForm'])->name('login');
    Route::post('login', [AuthController::class, 'login']);

    Route::get("register", [AuthController::class, 'showRegistrationForm'])->name('register');
    Route::post('register', [AuthController::class, 'register']);

});                       //  __closure__
Route::post('logout', [AuthController::class, 'logout'])->name('logout');

Route::middleware("auth")->group(function () {
    Route::get('/dashboard', function () {
        return view('dashboard');
    })->name('dashboard');
});

