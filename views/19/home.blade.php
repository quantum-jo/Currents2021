@extends('19.base')
@section('scripts')
@parent
<link rel="stylesheet" type="text/css" media="screen" href="css/home.css" />
@endsection
@section('content')
<section class="main_page_str">
	<div class="clearfix" id="home">
		<div class="col-sm-12">
			<div class="main_page_cont">
				<button class="button" onclick="location.href='workshops'">Click here for Workshops</button>
			</div>
		</div>
	</div>
	<div class="_tronicals_cont">
			<div class="_tronicals_pdf">

			</div>
	</div>
</section>
<section class="about_div _page_Sec">
	<center>
	<div class="sec_heading" style="color: black;">About Currents</div>
	</center>
	<div class="sec_content">
		<p style="font-size: 18px; color: black">
			CURRENTS is the Annual National level Technical symposium held by the Electrical and Electronics Department of NIT Tiruchirappalli<br><br>
			From its humble inception in 1990 by a group of enthusiastic EEE Association members, CURRENTS has over the years, grew exponentially from a small event into a National level technical event, adding under its wings various workshops sponsored by multiple tech giants who wish to ignite the spirit of innovation in the hearts of the young engineers. <br><br>
			Scheduled in the third week of February (from 14/02/19 to 17/02/19), ample time is given to pair up and think beyond. CURRENTS’19 brings together young minds from all across the country to test their wits and move on to emerge in their sub fields of Electrical and Electronics Engineering. Hosting a plethora of workshops, events and guest lectures from the most revered academicians, CURRENTS aims to spread open the gates housing the riches of technology to all who come. <br><br>
			We cordially invite students of Electrical, Electronics, Communication and Instrumentation Engineering as well as Diploma Courses from all colleges to have an electrifying February in CURRENTS’19!
		</p>
	</div>
</section>
<section class="looking_div">
	<center>
	<h1>Contact</h1>
	<div style="font-weight: bolder; font-size: 1.5em">
			Jagan : +91 72993 06577<br>
			Vijay : +91 73589 55699<br>
			Ganesh : +91 94494 40236<br>
		</div>
	</center>
	<div class="sec_content">
	</div>
</section>
@endsection