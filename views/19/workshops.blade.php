@extends('19.base')
@section('title')
<title>Workshops | Currents'19</title>
@endsection
@section('scripts')
@parent
<link rel="stylesheet" type="text/css" media="screen" href="css/workshops.css" />
@endsection
@section('content')
<section class="main_page_str">
	<br><br>
	<div class="title">Workshops</div>
	<div class="content">
		<a href="{{ env('APP_BASE_URL') }}/workshops/touchpad"><img class="img-link" src="{{asset('images/touchpad.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/ar"><img class="img-link" src="{{asset('images/augmented_reality.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/gcr"><img class="img-link" src="{{asset('images/gcr.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/ip"><img class="img-link" src="{{asset('images/image_processing.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/pcb"><img class="img-link" src="{{asset('images/pcb.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/python"><img class="img-link" src="{{asset('images/python.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/renewable"><img class="img-link" src="{{asset('images/renewable_energy.png')}}"></a>
		<a href="{{ env('APP_BASE_URL') }}/workshops/embedded"><img class="img-link" style="filter: grayscale(70%);" src="{{asset('images/embedded_systems.png')}}"></a>

	</div>
	<br><br>
	<div class="cnt">
		<h1>Procedure to avail On Duty</h1>
		<ul>
			<li>Once applied for a workshop, mail us the booking ID along with the list of participants.</li>
			<li>We will reply to the mail with the On Duty form attached. The On Duty form will be as shown in the given <a target="_blank" href="/download/OD_Form.pdf">template</a></li>
		</ul>
		<br><br>
		<h1>Special Privileges</h1>
		<ul>
			<li>Venue Partner Colleges : </li>
			<ul>
				<li>Students from venue partner colleges get a discount of ₹300 per team in kit workshops.</li>
			</ul>
			<li>Currents Campus Ambassadors (Register <a href="cca">here</a> for CCA) :</li>
			<ul>
				<li>Bring 5 teams/15 individuals: one non-kit based workshop free and ₹300 off in a kit workshop.</li>
				<li>Bring 10 teams/30 individuals: two non-kit based workshop free and ₹600 off in a kit workshop.</li>
				<li>Over 50 individuals: three non-kit/ one kit based workshop free.</li>
				<li>Accommodation is free for CCA</li>
			</ul>
			<li>Others:</li>
			<ul>
				<li>Colleges with over 40 individuals registering: 10% off on all workshops</li>
			</ul>
		</ul>
		<br><br>
		<h1>Venue Partners of CURRENTS'19</h1>
		<ul>
			<li>Mangayarkarasi College of Engineering, Madurai</li>
			<li>Government College of Engineering, Tirunelveli</li>
			<li>Mahendra Engineering College, Salem</li>
			<li>NIT Pondicherry</li>
			<li>Karpagam Institute of Technology</li>
			<li>Rajagiri School of Engineering and Technology</li>
			<li>BMS College of Engineering, Bengaluru</li>
		</ul>
	</div>
</section>
@endsection
