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
}
