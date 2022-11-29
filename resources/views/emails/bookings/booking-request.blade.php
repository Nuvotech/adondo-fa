<x-mail::message>
# Introduction


<div>

    {{ $booking_data['customerName'] }}
</div>
<div>

    {{ $booking_data['customerEmail'] }}
</div>
<div>
    {{ $booking_data['customerPhone'] }}

</div>
<div>

    {{ $booking_data['customerMessage'] }}
</div>

{{-- <x-mail::button :url="''">
Button Text
</x-mail::button> --}}

Thanks,<br>
{{ config('app.name') }}
</x-mail::message>
