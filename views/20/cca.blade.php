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
  padding: 4%;
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
  padding: 5%;
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
        <li style="float: right"><a href="#about">About</a></li>
        <li><a style="padding: 0; height: 100%"><img src="{{asset('https://currents.nitt.edu/images/logo-wb.png')}}"></a></li>
        
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
      <section id="benefits">
        <h1>Special Privileges for Currents Campus Ambassadors:</h1>

        <h3>Workshops Privileges</h3>
        <ul>
          <li>Bring 5 teams/15 individuals: one non-kit based workshop free and ₹300 off in a kit workshop.</li>
          <li>Bring 10 teams/30 individuals: two non-kit based workshop free and ₹600 off in a kit workshop.</li>
          <li>Over 50 individuals: three non-kit/ one kit based workshop free.</li>
        </ul>

        <h3>Accomodation Privileges</h3>
        <ul>
          <li>Accommodation is free for CCA</li>
        </ul>

        <h3>Merchandise Privileges</h3>
        <ul>
          <li>Bring 30 individuals for workshop, get a set of CURRENTS merchandise free and food coupons worth ₹300(T-shirt, pendrive, etc)</li>
          <li>Bring 50 individuals for workshop, get 2 set of CURRENTS merchandise free and food coupons worth ₹500(T-shirt, pendrive, etc)</li>
          <li>Goodies from our sponsors will be provided.</li>
          <li>Concession for our premium workshops to the ambassador and his team.</li>
        </ul>

        <h3>Certificates</h3>
        <ul>
          <li>Certificates will be provided for CURRENTS campus ambassadors</li>
        </ul>

      </div>
    </section>
    <section id="register">
      <h1 style="text-align: center; font-size: 2.5em;">So what are you waiting for? Come join us and be the spark to Currents!</h1>
      <button type="button" disable onclick="location.href = API_BASE_URL + '/cca/apply'" class="button" >Register</button>
    </section>
  </div>
</div>
