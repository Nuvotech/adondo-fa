<x-mail::message>
# Booking for {{ $booking_data['roomName'] }} at  {{ $booking_data['roomCountry'] }}



  **Customer Name:** {{ $booking_data['customerName'] }}; <br />
  **Customer Email:** {{ $booking_data['customerEmail'] }}; <br />
  **Customer Phone:** {{ $booking_data['customerPhone'] }}; <br />
  **Room Price:** R{{ $booking_data['roomPrice'] }} per night; <br />

  <br />

    {{ $booking_data['customerMessage'] }};


<br />
<br />

{{-- <x-mail::button :url="''">
Button Text
</x-mail::button> --}}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
