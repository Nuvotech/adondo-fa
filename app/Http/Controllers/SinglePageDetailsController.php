<?php

namespace App\Http\Controllers;

use App\Mail\BookingConfirmation;
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

        Mail::to('bookings@adondo-fa.co.za')->send(new BookingEnquiries($data));
        Mail::to($data['customerEmail'])->send(new BookingConfirmation($data));

        return back()->with('success', 'Thank you for contacting Adondo FA, your booking will be processed with lightning speed.  📆');
    }
}
