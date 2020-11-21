<title>Eureka | Currents '20</title>
<link rel="shortcut icon" href="images/title_bar.png">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script>
	window.onscroll = () => {
		const nav = document.querySelector('nav');
		if(this.scrollY <= 20) nav.className = ''; else nav.className = 'scroll';
	};
</script>
<script type="text/javascript" src="{{asset('js/script.js')}}"></script>
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<script>
var API_BASE_URL = "{{ env('APP_BASE_URL') }}";
//console.log("<?php echo base_path(); ?>");
//console.log(API_BASE_URL);
</script>
<style>
body {
	font-family:Helvetica, Arial, sans-serif;
	font-size: 14px;
	font-weight: 200;
	color: black;
	-webkit-font-smoothing: antialiased;
	font-smoothing: antialiased;
	background: url("{{ asset('https://currents.nitt.edu/images/eureka-bg-cg.jpeg') }}") no-repeat;
	background-position: 0% -4%;
	background-color: #5deaff;
	background-size: 100%;

}
.title{
	text-align: left;
	font-weight: bold;
	font-size: 7.5em;
	padding: 5%;
	margin-top: 10%;
}
.content{
	font-family:Helvetica, Arial, sans-serif;
	margin: auto;
	width: 85%;
	text-align: justify;
	font-size: 1.5em;
}
.button {
	background-color: #f44336;
	border: none;
	color: white;
	padding: 1% 2%;
	text-align: center;
	display: block;
	cursor: pointer;
	font-size: 2em;
	margin: auto;
	width: 30%;
}
._button {
	background-color: #f44336;
	border: none;
	color: white;
	padding: 1% 2%;
	text-align: center;
	display: block;
	cursor: pointer;
	font-size: 1.5em;
	margin-left: 13%;
}
h1 {
	font-size: 2em;
	font-weight: bolder;
}
nav ul {
	list-style-type: none;
	margin: 0;
	padding: 0;
	left: 0;
	top: 0;
	overflow: hidden;
	position: fixed;
	width: 100%;
	background-color: rgba(242, 244, 230, 0.6);
	transition: background-color 500ms linear;
}
nav li {
	font-family:"Nunito", Helvetica, Arial, sans-serif;
	font-size: 1.5em;
}
nav li a {
	display: block;
	color: black;
	padding: 14px 16px;
	text-decoration: none;
}
section {
	padding: 10%;
	line-height: 40px;
	background-color: #5deaff;
background-color: #5deaff;
background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 304 304' width='304' height='304'%3E%3Cpath fill='%239C92AC' fill-opacity='0.2' d='M44.1 224a5 5 0 1 1 0 2H0v-2h44.1zm160 48a5 5 0 1 1 0 2H82v-2h122.1zm57.8-46a5 5 0 1 1 0-2H304v2h-42.1zm0 16a5 5 0 1 1 0-2H304v2h-42.1zm6.2-114a5 5 0 1 1 0 2h-86.2a5 5 0 1 1 0-2h86.2zm-256-48a5 5 0 1 1 0 2H0v-2h12.1zm185.8 34a5 5 0 1 1 0-2h86.2a5 5 0 1 1 0 2h-86.2zM258 12.1a5 5 0 1 1-2 0V0h2v12.1zm-64 208a5 5 0 1 1-2 0v-54.2a5 5 0 1 1 2 0v54.2zm48-198.2V80h62v2h-64V21.9a5 5 0 1 1 2 0zm16 16V64h46v2h-48V37.9a5 5 0 1 1 2 0zm-128 96V208h16v12.1a5 5 0 1 1-2 0V210h-16v-76.1a5 5 0 1 1 2 0zm-5.9-21.9a5 5 0 1 1 0 2H114v48H85.9a5 5 0 1 1 0-2H112v-48h12.1zm-6.2 130a5 5 0 1 1 0-2H176v-74.1a5 5 0 1 1 2 0V242h-60.1zm-16-64a5 5 0 1 1 0-2H114v48h10.1a5 5 0 1 1 0 2H112v-48h-10.1zM66 284.1a5 5 0 1 1-2 0V274H50v30h-2v-32h18v12.1zM236.1 176a5 5 0 1 1 0 2H226v94h48v32h-2v-30h-48v-98h12.1zm25.8-30a5 5 0 1 1 0-2H274v44.1a5 5 0 1 1-2 0V146h-10.1zm-64 96a5 5 0 1 1 0-2H208v-80h16v-14h-42.1a5 5 0 1 1 0-2H226v18h-16v80h-12.1zm86.2-210a5 5 0 1 1 0 2H272V0h2v32h10.1zM98 101.9V146H53.9a5 5 0 1 1 0-2H96v-42.1a5 5 0 1 1 2 0zM53.9 34a5 5 0 1 1 0-2H80V0h2v34H53.9zm60.1 3.9V66H82v64H69.9a5 5 0 1 1 0-2H80V64h32V37.9a5 5 0 1 1 2 0zM101.9 82a5 5 0 1 1 0-2H128V37.9a5 5 0 1 1 2 0V82h-28.1zm16-64a5 5 0 1 1 0-2H146v44.1a5 5 0 1 1-2 0V18h-26.1zm102.2 270a5 5 0 1 1 0 2H98v14h-2v-16h124.1zM242 149.9V160h16v34h-16v62h48v48h-2v-46h-48v-66h16v-30h-16v-12.1a5 5 0 1 1 2 0zM53.9 18a5 5 0 1 1 0-2H64V2H48V0h18v18H53.9zm112 32a5 5 0 1 1 0-2H192V0h50v2h-48v48h-28.1zm-48-48a5 5 0 0 1-9.8-2h2.07a3 3 0 1 0 5.66 0H178v34h-18V21.9a5 5 0 1 1 2 0V32h14V2h-58.1zm0 96a5 5 0 1 1 0-2H137l32-32h39V21.9a5 5 0 1 1 2 0V66h-40.17l-32 32H117.9zm28.1 90.1a5 5 0 1 1-2 0v-76.51L175.59 80H224V21.9a5 5 0 1 1 2 0V82h-49.59L146 112.41v75.69zm16 32a5 5 0 1 1-2 0v-99.51L184.59 96H300.1a5 5 0 0 1 3.9-3.9v2.07a3 3 0 0 0 0 5.66v2.07a5 5 0 0 1-3.9-3.9H185.41L162 121.41v98.69zm-144-64a5 5 0 1 1-2 0v-3.51l48-48V48h32V0h2v50H66v55.41l-48 48v2.69zM50 53.9v43.51l-48 48V208h26.1a5 5 0 1 1 0 2H0v-65.41l48-48V53.9a5 5 0 1 1 2 0zm-16 16V89.41l-34 34v-2.82l32-32V69.9a5 5 0 1 1 2 0zM12.1 32a5 5 0 1 1 0 2H9.41L0 43.41V40.6L8.59 32h3.51zm265.8 18a5 5 0 1 1 0-2h18.69l7.41-7.41v2.82L297.41 50H277.9zm-16 160a5 5 0 1 1 0-2H288v-71.41l16-16v2.82l-14 14V210h-28.1zm-208 32a5 5 0 1 1 0-2H64v-22.59L40.59 194H21.9a5 5 0 1 1 0-2H41.41L66 216.59V242H53.9zm150.2 14a5 5 0 1 1 0 2H96v-56.6L56.6 162H37.9a5 5 0 1 1 0-2h19.5L98 200.6V256h106.1zm-150.2 2a5 5 0 1 1 0-2H80v-46.59L48.59 178H21.9a5 5 0 1 1 0-2H49.41L82 208.59V258H53.9zM34 39.8v1.61L9.41 66H0v-2h8.59L32 40.59V0h2v39.8zM2 300.1a5 5 0 0 1 3.9 3.9H3.83A3 3 0 0 0 0 302.17V256h18v48h-2v-46H2v42.1zM34 241v63h-2v-62H0v-2h34v1zM17 18H0v-2h16V0h2v18h-1zm273-2h14v2h-16V0h2v16zm-32 273v15h-2v-14h-14v14h-2v-16h18v1zM0 92.1A5.02 5.02 0 0 1 6 97a5 5 0 0 1-6 4.9v-2.07a3 3 0 1 0 0-5.66V92.1zM80 272h2v32h-2v-32zm37.9 32h-2.07a3 3 0 0 0-5.66 0h-2.07a5 5 0 0 1 9.8 0zM5.9 0A5.02 5.02 0 0 1 0 5.9V3.83A3 3 0 0 0 3.83 0H5.9zm294.2 0h2.07A3 3 0 0 0 304 3.83V5.9a5 5 0 0 1-3.9-5.9zm3.9 300.1v2.07a3 3 0 0 0-1.83 1.83h-2.07a5 5 0 0 1 3.9-3.9zM97 100a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-48 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 96a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-144a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm96 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM49 36a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-32 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM33 68a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 240a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm80-176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 48a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm112 176a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-16 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 180a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 16a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-32a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM17 84a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm32 64a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm16-16a3 3 0 1 0 0-6 3 3 0 0 0 0 6z'%3E%3C/path%3E%3C/svg%3E");
}
img {
	height: 8%;
	width: auto;
	margin-left: 3%;
	max-height: 65px;
}
html {
	scroll-behavior:smooth
}
.scroll ul {
	background-color: rgba(242, 244, 230, 1);
}
@media only screen and (max-width: 600px) {
	img {
		display: none;
	}
	nav {
		display: none;
	}
	body {
		background: cyan;
	}
	.title {
		text-align: center;
		font-size: 6em;
		margin-top: 30%;
		margin-left: 45%;
	}
	img {
		height: 6%;
		width: auto;
		margin-left: 50%;
	}
	.content{
		font-family:"Nunito", Helvetica, Arial, sans-serif;
		width: 100%;
		text-align: justify;
		font-size: 1.5em;
	}
	section {
		width: 100%;
		padding: 15%;
		line-height: 40px;
	}
	._button {
		background-color: #f44336;
		border: none;
		color: white;
		padding: 1% 2%;
		text-align: center;
		display: block;
		cursor: pointer;
		font-size: 1.5em;
		margin-left: 65%;
	}

}
</style>
<div class="container">
	<div class="wrapper">
		<nav>
			<ul>
				<li style="float: right"><a href="#register">Register</a></li>
				<li style="float: right"><a href="#contact">Contact</a></li>
				<li style="float: right"><a href="#prizes">Prizes</a></li>
				<li style="float: right"><a href="#impt_dates">Important Dates</a></li>
				<li style="float: right"><a href="#themes">Themes</a></li>
				<li style="float: right"><a href="#about">About</a></li>
				<li><a style="padding: 0; height: 100%"><img src="{{asset('https://currents.nitt.edu/images/logo-bw.png')}}"></a></li>
			</ul>
		</nav>
		<div>&nbsp;</div>
		<div class="title">
			EUREKA
		</div>
		<div>
			<button type="button" onclick="location.href = API_BASE_URL + '/eureka/register'" class="_button" >Register Now !</button>
		</div>
		<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
		<div class="content" id="grid">
			<section id="about">
				<h1>About EUREKA</h1>
				<p>
					EUREKA is an annual District level Science Exhibition conducted by CURRENTS, NIT TRICHY for the schools of Tiruchirappalli district. The event centers around a wide range of topics under Science and Technology to build the participants to put forth their innovative ideas for going closer to a better future. Here at EUREKA, we set a platform for the thought provoking youngsters to come out and shine forth with their exhibitions over a stage of honour.
				</p>
				<p>
					Our esteemed judges for the final round consists of scientists from research institutes and universities. We also invite a wide range Public Sector Undertakings, Industries, and other Non-governmental Organisations (NGO’s) working in the areas (around the centres of exhibition) to display their exhibits to further improve the understanding of various concepts for the children.
				</p>
			</section>
			<section id="themes">
				<h1>Themes</h1>
				<p style="font-weight: 800;">Agriculture and food security</p>
				<p>
					<ul>
						<li>Evaluation of climatic change on agriculture</li>
						<li>Environmental friendly measures of pest control</li>
						<li>Organic farming/ organic fertilizers (liquid manure and green manure) preparation of vermicompost</li>
						<li>Sustainable land use practices and farming methods</li>
						<li>Preservation, conservation and management of soil</li>
                        <li>Impact of pollution on food</li>
                        <li>Techniques to reduce production cost and conservation of raw materials</li>
					</ul>
				</p>
				<p style="font-weight: 800;">Energy – resources and conservation</p>
				<p>
					<ul>
						<li>Innovative and cost effective solar technologies for lighting in the rural electrification.</li>
						<li>Impact of bio-energy on food security.</li>
						<li>Use of tidal waves/ocean currents/salinity gradient for generating electricity.</li>
						<li>Designs/models of fuel-efficient automobile/machines.</li>
						<li>Innovations in batteries/inverters/photovoltaic cells to reduce cost</li>
					</ul>
				</p>
				<p style="font-weight: 800;">Disaster management</p>
				<p>
					<ul>
						<li>Access of clean and safe drinking water in the event of disaster</li>
						<li>Improvised/improved devices for effective communication between various emergency services</li>
						<li>Innovative designs of flood alarm/flood forecasting and cyclone warning networks</li>
						<li>Studies of the impact of global warming on human health (spread of epidemic like dengue, malaria, yellow fever etc).</li>
						<li>Technologies in forecasting and warning of cyclones, floods and storms</li>
					</ul>
				</p>
				<p style="font-weight: 800;">Environmental issues and concerns</p>
				<p>
					<ul>
						<li>Various way of waste disposal such as landfill, incineration, etc.</li>
						<li>Low cost waste management system</li>
						<li>Methods of ground water recharging.</li>
						<li>Impact of deforestation due to various human activities (river valley projects, construction of dams, industrial activities etc.)</li>
					</ul>
				</p>
				<p style="font-weight: 800;">Health</p>
				<p>
					<ul>
						<li>General awareness about occupational hazards and innovative techniques to overcome them.</li>
						<li>Demonstration and use of traditional methods of medication</li>
						<li>Importance of cleanliness and sanitation</li>
						<li>Ideas for developing low-cost nutritious food</li>
					</ul>
				</p>
			</section>
			<section id="impt_dates">
				<h1>Important Dates</h1>
				<ul>
					<li>31st January 2020 - Deadline for Registration and Abstract submission.</li>
					<li>02nd Febraury 2020 - Announcement of shortlist for final round.</li>
					<li>15th February 2020 - Final round at NIT Trichy</li>
				</ul>
			</section>
			<section id="prizes">
				<h1>Prizes worth Rs 20000 to be won !</h1>
			</section>
			<section id="contact">
				<h1>Contact</h1>
				<p>Charulatha<br>+91 73392 73112</p>
				<p>Vaishnavi<br>+91 73972 29052</p>
			</section>
			<section id="register">
				<button type="button" onclick="location.href = API_BASE_URL + '/eureka/register'" class="button" >Register</button>
			</section>
		</div>
		
	</div>
</div>
