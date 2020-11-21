@extends('19.base')
@section('title')
<title>Events | Currents '20</title>
@endsection
@section('scripts')
@parent
<link rel="stylesheet" type="text/css" media="screen" href="css/workshops.css" />
@endsection
@section('content')
<section class="main_page_str">
	<div class="title">Events</div>
	<div class="content">
		<a href="{{ env('APP_BASE_URL') }}/events/capture_currents"><img class="img-link" src="{{asset('https://currents.nitt.edu/images/event_capture_currents.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/events/code_currents"><img class="img-link" src="{{asset('https://currents.nitt.edu/images/event_code_currents.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/events/colloquium"><img class="img-link" src="{{asset('https://currents.nitt.edu/images/event_colloquium.png')}}"></a>
		<br>
		<a href="{{ env('APP_BASE_URL') }}/events/dhruva"><img class="img-link" src="{{asset('https://currents.nitt.edu/images/event_dhruva.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/events/iot_challenge"><img class="img-link" src="{{asset('https://currents.nitt.edu/images/event_iot_challenge.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/events/line_follower"><img class="img-link" src="{{asset('https://currents.nitt.edu/images/event_line_follower.png')}}"></a>
	</div>

	<br><br><br><br><br><br><br><br>
	<div class="cnt">
		<h1>Procedure to avail On Duty</h1>
		<ul>
			<li>Once applied for a workshop, mail us the booking ID along with the list of participants.</li>
			<li>We will reply to the mail with the On Duty form attached. The On Duty form will be as shown in the given <a target="_blank" href="/download/OD_Form.pdf">template</a></li>
		</ul>
		<br>
		<h1>Contacts</h1>
		<ul>
			<li>Harish : +91 89038 67931</li>
			<li>Sujana : +91 94459 28917</li>
		</ul>
	</div>
</section>
@endsection
