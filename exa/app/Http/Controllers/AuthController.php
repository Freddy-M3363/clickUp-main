<?php

namespace App\Http\Controllers;
use App\Models\User;
use illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

//use Illuminate\Http\Request;

class AuthController extends Controller
{
    //creating a user and saving the db
    public function Register(Request $request){
        $request->validate([
            'name' => 'required',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:6',
        ]);
        $user = User::create([
            'name'=>$request->name,
            'email' =>$request->email,
            'password'=>Hash::make($request->password),
        ]);

        return response()->json([
            'message'=>'User Created Successfully'], 201
        );
    }
    public function login(Request $request){

        $credentials = $request->only('email', 'password');
        if(Auth::attempt($credentials)){
            $user = Auth::user();
            $token = $user->createToken('auth_token')->plaintext;
            return response()->json([
                'token'=>$token, 'user'=>$user
            ], 200);
        }
        return response()->json(['message'=>'Unauthorized'], 401);
    }

    public function user(Request $request){
        return response()->json($request->user());

    }
//    public function logout(Request $request){
//        $request->user()->tokens()->delete();
//        return response()->json(['message'=>'Logged out Successfully'], 200);
//    }
}
