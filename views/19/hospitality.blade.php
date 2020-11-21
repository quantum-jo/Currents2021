@extends('19.base')
@section('scripts')
@parent
<link rel="stylesheet" type="text/css" media="screen" href="css/hospitality.css" />
@endsection
@section('content')
<style>
a{
color: white;
text-decoration: underline;
}
</style>
<section class="main_page_str">
    <div class="content">
        <h1 style="text-align: center;">Accommodation</h1>
        <div>
            <button class="button" disabled onclick="location='https://www.townscript.com/e/accommodation-currents-nit-trichy'" >Registrations Closed</button>
        </div>
        <ul style="font-weight: bolder;">
            <li>While applying for workshops, there is an option for accommodation of participants.
                <li>This will be a pre-booking for the accommodation.</li>
                <li>The money is to be paid at the PR desk at the time of arrival to the campus.</li>
                <li>Please note that once the form is submitted, you will not be allowed to cancel booking and have to pay the total amount. </li>
                <li>Following is the amount to be paid for accommodation, in addition to PR registration:</li>
                <ul>
                    <li>Upto two days stay - ₹200</li>
                    <li>Three days stay - ₹300</li>
                    <li>Do note that 24 hours is considered as a single day.</li>
                    <li>A caution deposit ₹150 is collected which will be refunded during check out. </li>
                    <li>For on-spot registration of accommodation, a surcharge of ₹50 is added to the base amount.</li>
                </ul>
            </ul>
        </div>
        <div style="text-align: center; font-size: 2em;">
            Contact : <br>
            Jagan : +91 72993 06577<br>
            Ganesh : +91 94494 40236<br>
        </div>
    </section>
    @endsection
