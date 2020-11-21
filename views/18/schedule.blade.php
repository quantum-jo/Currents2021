<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Schedule</title>
	<!-- jQuery Library -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>

	<!-- Bootstrap -->
    <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
      <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic|Roboto:400,300,700' rel='stylesheet' type='text/css'>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

	<!-- Schedule CSS -->
	<link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<style type="text/css">
	html, body{
		height: 100%;
	}
    body{
      background: url('/images/Bg_pic.jpg') no-repeat center center fixed; 
      -webkit-background-size: cover;
      -moz-background-size: cover;
      -o-background-size: cover;
      background-size: 101%;
            display: flex;
            flex-direction: column;
            font-family: "Roboto", arial, sans-serif;
            font-size: 18px;
            font-weight: 300;
            line-height: 1.8;       
        }

    @media (max-width: 800px) {
      body {      
         background-color: #20315b;
         background: url('/images/Bg_pic.jpg') no-repeat center fixed;
      }
    }
        footer {
          background-color: #333333;
          color: white;
          padding: 25px;
          text-align: center;
          width: 100%;
          //border: 1px solid black;
        }   
        #container{
            flex: 1 0 auto;
        } 

#bs-example-navbar-collapse-1 {
            font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
        font-size: 14px;
        line-height: 1.42857143;
}
</style>
<body>
    <nav class="navbar navbar-default" id="nav-toggle">
     <div class="container-fluid" style="background-color: #f8f8f8;">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="/currents">
        <img src="images/currents_logo.png" width="45" height="45" style="margin-top: -25%;">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
             <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="tronicals">TRONICALS</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link js-scroll-trigger" href="schedule">SCHEDULE</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="workshops">WORKSHOPS</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="events">EVENTS</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="lectures">LECTURES</a>
            </li>
            
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="initiatives">INITIATIVES</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="sponsors">SPONSORS</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="hospitality">HOSPITALITY</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="outreach">OUTREACH</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="contact">CONTACT US</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="about">ABOUT</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="faq">FAQ</a>
            </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


	<!-- Start Schedule  -->
	<div id="container">
		<section id="mu-schedule" style="margin-top: -5%;" >
			<div class="container">
				
				<div class="row">
					<div class="colo-md-12">
						<div class="mu-schedule-area">

							<div class="mu-title-area" style="text-align: center;color: #fff;">
								<h1 class="mu-title"><span style="color: lightgreen;font-weight: bold;">S</span>chedule</h1>
							</div>

							<div class="mu-schedule-content-area">
								<!-- Nav tabs -->
								<ul class="nav nav-tabs mu-schedule-menu" role="tablist">
								    <li role="presentation" class="active"><a href="#first-day" aria-controls="first-day" role="tab" data-toggle="tab"> Day 0/ 15 Feb</a></li>
								    <li role="presentation"><a href="#second-day" aria-controls="second-day" role="tab" data-toggle="tab"> Day 1/ 16 Feb</a></li>
								    <li role="presentation"><a href="#third-day" aria-controls="third-day" role="tab" data-toggle="tab"> Day 2/ 17 Feb</a></li>
								    <li role="presentation"><a href="#fourth-day" aria-controls="fourth-day" role="tab" data-toggle="tab"> Day 3/ 18 Feb</a></li>
								    
								</ul>

								<!-- Tab panes -->
								<div class="tab-content mu-schedule-content">
								    <div role="tabpanel" class="tab-pane fade mu-event-timeline in active" id="first-day">
								    	<ul>
								    		<!-- <li>
								    			<div class="mu-single-event">
								    				<p class="mu-event-time">5:00 PM - 8:00 PM</p>
								    				<h3>PCB Design</h3>
								    			</div>
								    		</li> -->
								    	</ul>
								    </div>
								    <div role="tabpanel" class="tab-pane fade mu-event-timeline" id="second-day">
								    	<ul>
								    		<li>
								    			<div class="mu-single-event">
								    				<p class="mu-event-time">9:30 AM - 4:30 PM</p>
								    				<h3>Gesture Controlled Robotics</h3>
								    			</div>
								    		</li>
								    		<!--<li>
								    			<div class="mu-single-event">
								    				<img src="assets/images/speaker-1.jpg" alt="event speaker">
								    				<p class="mu-event-time">5:00 PM - 8:00 PM</p>
								    				<h3>PCB Design</h3>
								    				<span></span>
								    			</div> 
								    		</li>-->
								    		<li>
								    			<div class="mu-single-event">
								    				<!--<img src="assets/images/speaker-1.jpg" alt="event speaker">-->
								    				<p class="mu-event-time">9:30 AM - 4:30 PM</p>
								    				<h3>Renewable Energy Systems</h3>
								    				<span></span>
								    			</div>
								    		</li>
								       	</ul>
								    </div>
								    <div role="tabpanel" class="tab-pane fade mu-event-timeline" id="third-day">
								    	<ul>
								    		<li>
								    			<div class="mu-single-event">
								    				<p class="mu-event-time">9:30 AM - 4:30 PM</p>
								    				<h3>Smart Grids</h3>
								    			</div>
								    		</li>
								    		<li>
								    			<div class="mu-single-event">
								    				<!--<img src="assets/images/speaker-1.jpg" alt="event speaker">-->
								    				<p class="mu-event-time">9:30 AM - 4:30 PM</p>
								    				<h3>Smart Home Automation</span>
								    			</div>
								    		</li>
								    		<!--<li>
								    			<div class="mu-single-event">
								    				<img src="assets/images/speaker-1.jpg" alt="event speaker">
								    				<p class="mu-event-time">5:00 PM - 8:00 PM</p>
								    				<h3>PCB Design</h3>
								    				<span></span>
								    			</div>
								    		</li> -->
								    	</ul>								    		
								    </div>
								    <div role="tabpanel" class="tab-pane fade mu-event-timeline" id="fourth-day">
								    	<ul>
								    		<li>
								    			<div class="mu-single-event">
								    				<p class="mu-event-time">9:30 AM - 4:30 PM</p>
								    				<h3>Embedded Systems</h3>
								    			</div>
								    		</li>
								    		<li>
								    			<div class="mu-single-event">
								    				<!--<img src="assets/images/speaker-1.jpg" alt="event speaker">-->
								    				<p class="mu-event-time">9:30 AM - 4:30 PM</p>
								    				<h3>Human Computer Interaction</span>
								    			</div>
								    		</li>
								    		<li>
								    			<div class="mu-single-event">
								    				<!--<img src="assets/images/speaker-1.jpg" alt="event speaker">-->
								    				<p class="mu-event-time">4:30 PM</p>
								    				<h3>FPGA</h3>
								    				<span></span>
								    			</div>
								    		</li>
								    	</ul>	
								    </div>
								    
								</div>

							</div>
							
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
	<!-- End Schedule -->

	  <footer class="container-fluid text-center">
	      <div class="foot">Currents '18</div>
	  </footer>
	  
</body>
</html>
