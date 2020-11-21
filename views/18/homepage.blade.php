<!DOCTYPE html>
<html>
<head>	
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<script type="text/javascript" src="js/smooth-scroll.js"></script>
	
	<link rel="stylesheet" type="text/css" href="css/homepage.css">

	<link href="https://fonts.googleapis.com/css?family=Rajdhani" rel="stylesheet">
	<title>Currents'18</title>
	<style type="text/css">
		
        footer {
            background-color: #333333;
            color: white;
            padding: 25px;
            text-align: center;
            font-family: "Roboto", arial, sans-serif;
            //border: 1px solid black;
        }   
	</style>
</head>
<body>
	<div class="container-fluid">
		<div class="row" id="header">
			<div class="clearfix">
				<div class="col-sm-12" id="nav-block">
						<div class="col-sm-1"><a data-scroll href="#home">HOME</a></div>			
						<div class="col-sm-1"><a data-scroll href="#schedule">SCHEDULE</a></div>
						<div class="col-sm-1">WORKSHOPS</div>
						<div class="col-sm-1">EVENTS</div>
						<div class="col-sm-1"><a href="guestlectures">LECTURES</a></div>
						<div class="col-sm-1"><a href="initiatives">INITIATIVES</a></div>
						<div class="col-sm-1">HOSPITALITY</div>
						<div class="col-sm-1">OUTREACH</div>
						<div class="col-sm-1">CONTACTS</div>
						<div class="col-sm-1"><a href="about">ABOUT US</a></div>
						<div class="col-sm-1"><a href="faq">FAQ</a></div>
				</div>
			</div>
			<div class="clearfix" id="home">
				<div class="col-sm-12" id="logo">
					<a data-scroll href="#about">
						<img src="images/currents_logo.png" height="300px" width="auto"/>
					</a>
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid" id="about">
		<div class="row">
			<div class="clearfix">
				<div id="about-content">
					About Currents'18 
				</div>
			</div>
		</div>
	</div>

	<div class="container-fluid" id="schedule">
		<div class="row">
			<div class="clearfix">
				<div id="schedule-content">
					Schedule Map followed by footer
				</div>
			</div>
		</div>
	</div>

  <footer class="container-fluid text-center">
      <div class="foot">Currents '18</div>
  </footer>

</body>
<script type="text/javascript">
	    var scroll = new SmoothScroll('a[href*="#"]', {
        ignore: '[data-scroll-ignore]', 
        header: null,
        speed: 500, 
        offset: 0, 
        easing: 'easeInOutCubic',
        customEasing: function (time) {},
        before: function () {},
        after: function () {} 
    });

</script>
</html>