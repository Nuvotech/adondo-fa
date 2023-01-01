<?php

namespace App\Http\Controllers;

use App\Mail\BookingEnquiries;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SinglePageDetailsController extends Controller
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

        $data['roomName'] = $request->roomName;
        $data['roomType'] = $request->roomType;
        $data['roomCountry'] = $request->roomCountry;
        $data['roomPrice'] = $request->roomPrice;

        Mail::to('booking@adondo-fa.com')->send(new BookingEnquiries($data));


        // dd(Request::only('customerName'));
    }
}
