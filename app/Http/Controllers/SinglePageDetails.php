<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;

class SinglePageDetails extends Controller
{
    public function show(Request $request){
        // dd($request->all());
        return Inertia::render('PropertyDetails', [
            'id' => $request->id
        ]);
    }

    public function store(Request $request){
         $data = $request->validate([
            'customerName' => ['required'],
            'customerEmail' => ['email', 'max:50'],
            'customerPhone' => ['required', 'min:10'],
            'customerMessage' => ['max:120'],

        ]);

        dd($data);


        // dd(Request::only('customerName'));
    }
}
