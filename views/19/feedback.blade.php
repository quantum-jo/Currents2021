<!DOCTYPE html>
<html>
	<head>
		<title>Feedback | Currents '19</title>
		<!-- for-mobile-apps -->
		<link rel="shortcut icon" href="images/title_bar.png">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<!-- //for-mobile-apps -->
		<link href="css/feedback-style.css" rel="stylesheet" type="text/css" media="all" />
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	</head>
	<style>
		select, option { font:400 14px/16px "Open Sans", Helvetica, Arial, sans-serif; }
		select, option {
	width:100%;
	border:1px solid #CCC;
	background:#FFF;
	margin:0 0 5px;
	padding:10px;
	}
	</style>
	<script type="text/javascript">
	var API_BASE_URL = "{{ env('APP_BASE_URL') }}";
	var rate = {}
	function rating(vari, val) {
		rate[vari] = val;
	}

	function sub() {
	var route = '/api/feedback';
	var method = 'POST';
	
	var data_obj = {
		'c_id' : document.getElementById('c_id').value,
		'workshop' : document.getElementById('workshop').value,
		'rating' : rate,
		'aspect' : document.getElementById('aspect').value,
		'improvements' : document.getElementById('improvements').value,
		'howknow' : document.getElementById('howknow').value
	}
	
	var request = $.ajax({
		url: API_BASE_URL+route,
		method: method,
		data: data_obj,
		xhrFields: {
			withCredentials: true
		}
	});
	request.done(function(data){
		data = JSON.parse(data);
		if(data.status_code == 200) {
			$('form').hide();
			$('#thanks').show();
		}
	});
	}
	</script>
	<body>
		<div class="content">
			<img src="images/logo-wb.png" class="h_logo_class" style="height:100px;width:100px; margin-left: 45%;">
			<h1>Feedback</h1>
			<div class="main" >
				<form onsubmit="sub(); return false;" method="post">

					<h5>Currents ID</h5>
					<input id="c_id" type="text" value="Type here" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Type here';}" required>
					<h5>Choose Workshop</h5>
					<select id="workshop" required>
						<option value="python">Python</option>
						<option value="pcb">PCB Design</option>
						<option value="touchpad">Touchpad</option>
						<option value="gcr">Gesture Controlled Robotics</option>
						<option value="ar">Augmented Reality</option>
						<option value="ip">Image Processing</option>
						<option value="es">Embedded Systems</option>
						<option value="renewable">Renewable Energy Systems</option>
					</select>
					<h5>The workshop lived upto my expectations.</h5>
					<span class="starRating">
						<input id="rating_1_5" onchange="rating('rating_1', 5)" type="radio" name="rating_1" value="5" required>
						<label for="rating_1_5">5</label>
						<input id="rating_1_4" onchange="rating('rating_1', 4)" type="radio" name="rating_1" value="4" required>
						<label for="rating_1_4">4</label>
						<input id="rating_1_3" onchange="rating('rating_1', 3)" type="radio" name="rating_1" value="3" required >
						<label for="rating_1_3">3</label>
						<input id="rating_1_2" onchange="rating('rating_1', 2)" type="radio" name="rating_1" value="2" required>
						<label for="rating_1_2">2</label>
						<input id="rating_1_1" onchange="rating('rating_1', 1)" type="radio" name="rating_1" value="1" required>
						<label for="rating_1_1">1</label>
					</span>
					<h5>Workshop objectives were stated clearly and met.</h5>
					<span class="starRating">
						<input id="rating_2_5" onchange="rating('rating_2', 5)"  type="radio" required  name="rating_2"  value="5" required>
						<label for="rating_2_5">5</label>
						<input id="rating_2_4" onchange="rating('rating_2', 4)"  type="radio" required  name="rating_2" value="4" required>
						<label for="rating_2_4">4</label>
						<input id="rating_2_3" onchange="rating('rating_2', 3)"  type="radio"  name="rating_2" value="3"  required>
						<label for="rating_2_3">3</label>
						<input id="rating_2_2" onchange="rating('rating_2', 2)"  type="radio" name="rating_2"  value="2" required>
						<label for="rating_2_2">2</label>
						<input id="rating_2_1"  onchange="rating('rating_2', 1)" type="radio"  name="rating_2" value="1" required>
						<label for="rating_2_1">1</label>
					</span>
					<h5>Workshop content was useful.</h5>
					<span class="starRating">
						<input id="rating_3_5" onchange="rating('rating_3', 5)" type="radio" name="rating_3" value="5" required>
						<label for="rating_3_5">5</label>
						<input id="rating_3_4" onchange="rating('rating_3', 4)" type="radio" name="rating_3" value="4" required>
						<label for="rating_3_4">4</label>
						<input id="rating_3_3" onchange="rating('rating_3', 3)" type="radio" name="rating_3" value="3"  required>
						<label for="rating_3_3">3</label>
						<input id="rating_3_2" onchange="rating('rating_3', 2)" type="radio" name="rating_3" value="2" required>
						<label for="rating_3_2">2</label>
						<input id="rating_3_1" onchange="rating('rating_3', 1)" type="radio" name="rating_3" value="1" required>
						<label for="rating_3_1">1</label>
					</span>
					<h5>Content was delivered properly.</h5>
					<span class="starRating">
						<input id="rating_4_5" onchange="rating('rating_4', 5)" type="radio" name="rating_4" value="5" required>
						<label for="rating_4_5">5</label>
						<input id="rating_4_4" onchange="rating('rating_4', 4)" type="radio" name="rating_4" value="4" required>
						<label for="rating_4_4">4</label>
						<input id="rating_4_3" onchange="rating('rating_4', 3)" type="radio" name="rating_4" value="3"  required>
						<label for="rating_4_3">3</label>
						<input id="rating_4_2" onchange="rating('rating_4', 2)" type="radio" name="rating_4" value="2" required>
						<label for="rating_4_2">2</label>
						<input id="rating_4_1" onchange="rating('rating_4', 1)" type="radio" name="rating_4" value="1" required>
						<label for="rating_4_1">1</label>
					</span>
					<h5>Doubts were clarified properly and correctly.</h5>
					<span class="starRating">
						<input id="rating_5_5" onchange="rating('rating_5', 5)" type="radio" name="rating_5" value="5" required>
						<label for="rating_5_5">5</label>
						<input id="rating_5_4" onchange="rating('rating_5', 4)" type="radio" name="rating_5" value="4" required>
						<label for="rating_5_4">4</label>
						<input id="rating_5_3" onchange="rating('rating_5', 3)" type="radio" name="rating_5" value="3" required >
						<label for="rating_5_3">3</label>
						<input id="rating_5_2" onchange="rating('rating_5', 2)" type="radio" name="rating_5" value="2" required>
						<label for="rating_5_2">2</label>
						<input id="rating_5_1" onchange="rating('rating_5', 1)" type="radio" name="rating_5" value="1" required>
						<label for="rating_5_1">1</label>
					</span>
					<h5>Rate the difficulty of the workshop.</h5>
					<span class="starRating">
						<input id="rating_6_5" onchange="rating('rating_6', 5)" type="radio"  name="rating_6"  value="5" required>
						<label for="rating_6_5">5</label>
						<input id="rating_6_4" onchange="rating('rating_6', 4)" type="radio"  name="rating_6" value="4" required>
						<label for="rating_6_4">4</label>
						<input id="rating_6_3" onchange="rating('rating_6', 3)" type="radio" name="rating_6"  value="3"  required>
						<label for="rating_6_3">3</label>
						<input id="rating_6_2" onchange="rating('rating_6', 2)" type="radio" name="rating_6"  value="2" required>
						<label for="rating_6_2">2</label>
						<input id="rating_6_1" onchange="rating('rating_6', 1) "type="radio"  name="rating_6" value="1" required>
						<label for="rating_6_1">1</label>
					</span>
					<h5>Which aspect of the workshop did you like the most ?</h5>
					<textarea id="aspect" placeholder="Type Here" required=""></textarea>
					<h5>What improvements would you recommend in this workshop ?</h5>
					<textarea id="improvements"placeholder="Type Here" required=""></textarea>
					<h5>How did you come to know about Currents ?</h5>
					<textarea id="howknow"placeholder="Type Here" required=""></textarea>
					<input type="submit" onclick="sub(); return false;" value="Send Feedback">
				</form>
				<div id="thanks" style="display: none">
					Thanks for the feedback.
				</div>
			</div>
		</div>
	</body>
</html>