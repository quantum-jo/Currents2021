<!doctype html>
<html lang="{{ app()->getLocale() }}">
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<link rel="shortcut icon" href="images/title_bar.png">
		<title>Currents' 20</title>
		<!-- Fonts -->
		<link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
		<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" type="text/css" media="screen" href="css/countdown.css" />
	</head>
	<body>
			<div id='screen-container' class="fillParent">
        		<div class='header'>
            		<div class='links-container' class="fillParent">
						<a href="events">Events</a>
						<a href="eureka">Eureka</a>
						<a href="volts">Volts</a>
						<a href="workshops">Workshops</a>
						<a href="sponsors">Sponsors</a>
						<div class="dropdown">
							<button class="dropbtn">UNIQ 
							<i class="fa fa-caret-down"></i>
							</button>
							<div class="dropdown-content">
								<a href="https://www.uniqtechnologies.co.in/" target="_blank">UNIQ Technologies</a>
								<a href="https://studentsbazaar.in/" target="_blank">Student Bazaar</a>
								<a href="http://www.internshipinchennai.com/" target="_blank">Internship</a>
								<a href="http://www.ieeefinalyearprojects.org/" target="_blank">IEEE Projects</a>
							</div>
						</div> 
					</div>
        		</div>
        		<div class='middle'>
            		<div class="fillParent">
               			<canvas id="canvas-element" class="fillParent" width="100" height="100">
                    		Your browser is not compatible with HTML5 canvas.
                		</canvas>
            		</div>
        		</div>
				<div class='footer'>
            		<div></div>
        		</div>
    		</div>
    <script type='text/javascript' src='js/countdown.js'></script>
	</body>
</html>