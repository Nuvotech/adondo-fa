<x-mail::message>
# Booking for {{ $booking_data['roomName'] }} at  {{ $booking_data['roomArea'] }}



  **Customer Name:** {{ $booking_data['customerName'] }}; <br />
  **Customer Email:** {{ $booking_data['customerEmail'] }}; <br />
  **Customer Phone:** {{ $booking_data['customerPhone'] }}; <br />
  **Customer Check-in:** {{ $booking_data['customerCheckInDate'] }}; <br />
  **Customer Check-out:** {{ $booking_data['customerCheckOutDate'] }}; <br />
  **Room Price:** R{{ $booking_data['roomPrice'] }} per night; <br />


    {{ $booking_data['customerMessage'] }};


<br />
<br />

{{-- <x-mail::button :url="''">
Button Text
</x-mail::button> --}}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
