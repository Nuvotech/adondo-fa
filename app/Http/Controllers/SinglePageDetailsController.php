<?php

namespace App\Http\Controllers;

use App\Mail\BookingEnquiries;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class SinglePageDetailsController extends Controller
{
    public function show(Request $request){

        return Inertia::render('PropertyDetails', [
            'id' => $request->id
        ]);
    }

    public function store(Request $request){

         $data = $request->validate([
            'customerName' => ['required'],
            'customerEmail' => ['email', 'max:50'],
            'customerPhone' => ['required', 'min:10'],
            'customerCheckInDate' => ['required' ],
            'customerCheckOutDate' => ['required'],
            'customerMessage' => ['max:120'],

        ]);

        $data['roomName'] = $request->roomName;
        $data['roomType'] = $request->roomType;
        $data['roomArea'] = $request->roomaArea;
        $data['roomPrice'] = $request->roomPrice;

      dd($data);


        Mail::to('booking@adondo-fa.com')->send(new BookingEnquiries($data));

        return response()->json('Your booking has been successfully submitted', 201);
    }
}
