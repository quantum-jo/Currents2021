<title>Currents Campus Ambassador</title>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="{{asset('js/script.js')}}"></script>
<meta content="width=device-width, initial-scale=1.0" name="viewport" />
<script>
  var API_BASE_URL = "{{ env('APP_BASE_URL') }}";
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Chakra+Petch');
@import url('https://fonts.googleapis.com/css?family=Nunito');


body {
  font-family:"Chakra Petch", Helvetica, Arial, sans-serif;
  font-size: 14px;
  font-weight: 400;
  color: white;
  -webkit-font-smoothing: antialiased;
  font-smoothing: antialiased;
  background: black;
}

.title{
  text-align: center;
  font-weight: bold;
  font-size: 7.5em;
  padding: 7%;
  margin-top: 20px;
}

.content{
  font-family:"Nunito", Helvetica, Arial, sans-serif;
  margin: auto;
  width: 70%;
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
    background-color: #333;
    position: fixed;
    width: 100%;
}

nav li {
    font-family:"Nunito", Helvetica, Arial, sans-serif;
    float: left;
    font-size: 1.5em;
}

nav li a {
    display: block;
    color: white;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
}

/* Change the link color to #111 (black) on hover */
li a:hover {
    background-color: #111;
}

section {
  padding: 10%;
  line-height: 40px;
}

img {
  height: 8%;
  width: auto;
  margin-left: 50%;
}

html{scroll-behavior:smooth}

@media only screen and (max-width: 600px) {
  .title {
    text-align: center;
    font-size: 6em;
    padding: 1%;
    margin-top: 30px;
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
  width: 120%;
  padding: 15%;
  line-height: 40px;
  }
}
</style>
<div class="container">
  <div class="wrapper">
    <nav>
      <ul>
        
        <li style="float: right"><a href="#register">Register</a></li>
        <li style="float: right"><a href="#benefits">Benefits</a></li>
        <li style="float: right"><a href="#what">What is It ?</a></li>
        <li style="float: right"><a href="#about">About</a></li>
        <li><a style="padding: 0; height: 100%"><img src="{{asset('images/logo.jpg')}}"></a></li>
        
      </ul>
    </nav>
    <div>&nbsp;</div>
    <div class="title"> Currents<br> Campus<br> Ambassador</div>
    <div class="content">
      <section id="about">
        <h1>About the Programme</h1>
        <p>The Currents Campus Ambassador (CCA) Programme is an initiative of Currents, NIT Trichy where the ambassador from different colleges become one among us and supports us by being a liaison between Currents, NIT Trichy and their college.
        The CCA Programme is a great opportunity to get involved with the National level technical symposium of NIT Trichy and get connected with a lot more people all over the country. You would be the face of Currents, NIT Trichy for your college, and be a bridge in carrying forward our vision to your college.</p>
      </section>
      <section id="what">
        <h1> What is CCA ? </h1>
        <p>The CCA Programme consists of a series of tasks and awards associated with it. As and when the tasks are completed, points are added up and the top performing CCA's are rewarded, developing them holistically.</p>
      </section>
      <section id="benefits">
        <h1>Why should you be the Campus Ambassador for Currents?</h1>
        <ul>
          <li>Huge Cash Prizes on offer.</li>
          <li>Official certificate of appreciation from Currents, NIT Trichy.</li>
          <li>Goodies from our sponsors will be provided.</li>
          <li>Concession for our premium workshops to the ambassador and his team.</li>
          <li>Opportunity to meet our Guest Lecturers and engage in an interactive session with them.</li>
          <li>Internship opportunities from our sponsors</li>
          <li>Benefits on services of travel and accomodation.</li>
          <li>A National level networking with other CCA's and their colleges to get in-depth understanding of cultures across India </li>
        </ul>
      </div>
    </section>
    <section id="register">
      <h1 style="text-align: center; font-size: 2.5em;">So what are you waiting for? Come join us and be the spark to Currents!</h1>
      <button type="button" disable onclick="location.href = API_BASE_URL + '/cca/apply'" class="button" >Registrations Closed</button>
    </section>
  </div>
</div>
