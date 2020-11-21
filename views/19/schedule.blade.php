<!DOCTYPE html>
<html>
<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>Schedule | Currents 19</title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script src="js/header.js"></script>
	<link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
	<link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>
<style type="text/css">
	html, body{
		height: 100%;
	}
	body{
	  background: url('../images/workshops_main.jpg') no-repeat center center fixed; 
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
		 background: url('../images/workshops_main.jpg') no-repeat center fixed;
	  }
	}
		footer {
		  background-color: #333333;
		  color: white;
		  padding: 25px;
		  text-align: center;
		  width: 100%;
		}   
		#container{
			flex: 1 0 auto;
		} 

		#bs-example-navbar-collapse-1 {
			font-family: "Helvetica Neue",Helvetica,Arial,sans-serif;
			font-size: 14px;
			line-height: 1.42857143;
		}

		.nav-tabs {
			border: none;
		}

		li {
			font-weight: bolder;
			color: white;
		}
</style>
<body>
					<div class="header">
					<div class="h_container">
						<div class="h_logo_">
							<a href="/">
								<img src="images/logo-wb.png" class="h_logo_class" style="height:60px;width:60px;">
							</a>
						</div>
						<div class="h_list_cont">
							<div class="h_list">
								<div class="h_menu_list" id="about" onclick="location.href='/about'">
									About
								</div>
								<div class="h_menu_list" id="events" onclick="location.href='/events'">
									Events
								</div>
								<div class="h_menu_list" id="lectures" onclick="location.href='/lectures'">
									Lectures
								</div>
								<div class="h_menu_list" id="workshops" onclick="location.href='/workshops'">
									Workshops
								</div>
								<div class="h_menu_list" id="eureka" onclick="location.href='/eureka'">
									Eureka
								</div>
								<div class="h_menu_list" id="volts" onclick="location.href='/volts'">
									Volts
								</div>
								<div class="h_menu_list" id="hospitality" onclick="location.href='/hospitality'">
									Hospitality
								</div>
								<div class="h_menu_list" id="tronicals" onclick="location.href='/tronicals'">
									Tronicals
								</div>
								<div class="h_menu_list" id="sponsors" onclick="location.href='/sponsors'">
									Sponsors
								</div>
								<div class="h_menu_list" id="contact" onclick="location.href='https://www.uniqtechnologies.co.in/'">
									UNIQ
								</div>
								<div class="h_menu_list" id="contact" onclick="location.href='/contact'">
									Contact
								</div>
								<div class="h_menu_icon" id="menu_icon" onclick="open_side_nav()">
									<div class="menu_icon_bar" id="mib1"></div>
									<div class="menu_icon_bar" id="mib2"></div>
									<div class="menu_icon_bar" id="mib3"></div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div class="side_nav" id="side_nav">
                <div class="side_nav_container">
                    <div class="side_close" onclick="close_side_nav();"></div>
                    <div class="sn_logo">
                        <div class="sn_log_image sn_logo_">
                            <img src="images/title_bar.png" style="height:50px;width:50px;">
                        </div>
                        <div class="sn_log_text sn_logo_">urrents</div>
                    </div>
                    <div class="sn_menu_list_container">
                        <div class="sn_menu_list" id="sn_tronicals" onclick="location.href='/tronicals'">
                            Tronicals
                        </div>
                        <div class="sn_menu_list" id="sn_schedule" onclick="location.href='/schedule'">
                            Schedule
                        </div>
                        <div class="sn_menu_list" id="sn_workshops" onclick="location.href='/workshops'">
                            Workshops
                        </div>
                        <div class="sn_menu_list" id="sn_events" onclick="location.href='/events'">
                            Events
                        </div>
                        <div class="sn_menu_list" id="sn_lectures" onclick="location.href='/lectures'">
                            Lectures
                        </div>
                        <div class="sn_menu_list" id="sn_eureka" onclick="location.href='/eureka'">
                            Eureka
                        </div>
                        <div class="sn_menu_list" id="sn_volts" onclick="location.href='/volts'">
                            Volts
                        </div>
                        <div class="sn_menu_list" id="sn_sponsors" onclick="location.href='/sponsors'">
                            Sponsors
                        </div>
                        <div class="sn_menu_list" id="sn_hospitality" onclick="location.href='/hospitality'">
                            Hospitality
                        </div>
                        <div class="sn_menu_list" id="sn_contact" onclick="location.href='https://www.uniqtechnologies.co.in/'">
                            UNIQ
                        </div>
                        <div class="sn_menu_list" id="sn_contact" onclick="location.href='/contact'">
                            Contact
                        </div>
                        <div class="sn_menu_list" id="sn_about" onclick="location.href='/about'">
                            About
                        </div>
                    </div>
                </div>
            </div>


	<!-- Start Schedule  -->
	<div id="container">
		<section id="mu-schedule" style="margin-top: -5%;" >
			<div class="container">
				
				<div class="row">
					<div class="colo-md-12">
						<div class="mu-schedule-area">

							<div class="mu-title-area" style="text-align: center;color: #fff;">
								<h1 class="mu-title">Schedule</h1>
							</div>

							<div class="mu-schedule-content-area">
								<!-- Nav tabs -->
								<ul class="nav nav-tabs mu-schedule-menu" role="tablist">
									<li role="presentation" class="active"><a href="#first-day" aria-controls="first-day" role="tab" data-toggle="tab"> Day 0/ 14 Feb</a></li>
									<li role="presentation"><a href="#second-day" aria-controls="second-day" role="tab" data-toggle="tab"> Day 1/ 15 Feb</a></li>
									<li role="presentation"><a href="#third-day" aria-controls="third-day" role="tab" data-toggle="tab"> Day 2/ 16 Feb</a></li>
									<li role="presentation"><a href="#fourth-day" aria-controls="fourth-day" role="tab" data-toggle="tab"> Day 3/ 17 Feb</a></li>
									
								</ul>

								<!-- Tab panes -->
								<div class="tab-content mu-schedule-content">
									<div role="tabpanel" class="tab-pane fade mu-event-timeline in active" id="first-day">
										<ul>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">5:00 PM - 8:00 PM</p>
													<h3>Python</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">5:00 PM - 8:00 PM</p>
													<h3>PCB<br> Design</h3>
												</div>
											</li>
										</ul>
									</div>
									<div role="tabpanel" class="tab-pane fade mu-event-timeline" id="second-day">
										<ul>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">9:30 AM - 4:30 PM</p>
													<h3>Touchpad</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">05:00 PM - 08:00 PM</p>
													<h3>Image <br>Processing</h3>
												</div> 
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">02:00 PM - 05:00 PM</p>
													<h3>Colloquium</h3>
												</div> 
											</li>
										</ul>
									</div>
									<div role="tabpanel" class="tab-pane fade mu-event-timeline" id="third-day">
										<ul>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">9:30 PM - 4:30 PM</p>
													<h3>Gesture Controlled<br> Robotics</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">9:30 AM - 4:30 PM</p>
													<h3>Renewable Energy<br> Systems</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">5:00 PM - 8:00 PM</p>
													<h3>Python</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">5:00 PM - 7:00 PM</p>
													<h3>Dhruva</span>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">6:30 PM - 8:30 PM</p>
													<h3>Code Currents</span>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">5:00 PM - 8:00 PM</p>
													<h3>PCB Design</span>
												</div>
											</li>
										</ul>								    		
									</div>
									<div role="tabpanel" class="tab-pane fade mu-event-timeline" id="fourth-day">
										<ul>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">9:30 AM - 11:30 PM</p>
													<h3>Simulacrum</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">9:30 AM - 4:30 PM</p>
													<h3>Augmented Reality</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">11:30 AM - 01:00 PM</p>
													<h3>Line Follower</h3>
												</div>
											</li>
											<li>
												<div class="mu-single-event">
													<p class="mu-event-time">1:30 PM - 4:30 PM</p>
													<h3>Image Processing</span>
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
</body>
</html>
