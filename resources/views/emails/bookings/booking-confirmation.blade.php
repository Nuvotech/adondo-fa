<x-mail::message>
# Booking for {{ $booking_data['roomName'] }} <br /><br/>

Thank you for booking with us for the date of **{{ $booking_data['customerCheckInDate'] }}** to **{{ $booking_data['customerCheckOutDate'] }}**, <br />
Your booking has been received and confirmation will follow. <br />


<br />


Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
