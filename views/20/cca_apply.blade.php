<title>Currents Campus Ambassador</title>
<script>
  var API_BASE_URL = "{{ env('APP_BASE_URL') }}";
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="{{asset('https://currents.nitt.edu/js/cca_script.js')}}"></script>
<style>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,300,600);

* {
  margin:0;
  padding:0;
  box-sizing:border-box;
  -webkit-box-sizing:border-box;
  -moz-box-sizing:border-box;
  -webkit-font-smoothing:antialiased;
  -moz-font-smoothing:antialiased;
  -o-font-smoothing:antialiased;
  font-smoothing:antialiased;
  text-rendering:optimizeLegibility;
}

body {
  font-family:"Open Sans", Helvetica, Arial, sans-serif;
  font-weight:300;
  font-size: 12px;
  line-height:30px;
  color:#777;
  background:#191919;
}

.container {
  max-width:500px;
  width:100%;
  margin:0 auto;
  position:relative;
}

form input[type="text"], form input[type="email"], form input[type="tel"], form input[type="url"], form input[type="number"], form textarea, form button[type="submit"] { font:400 12px/16px "Open Sans", Helvetica, Arial, sans-serif; }

form {
  background:#4c4c4c;
  padding:25px;
  margin:50px 0;
}

form h3 {
  color: #F96;
  display: block;
  font-size: 30px;
  font-weight: 400;
}

form h4 {
  margin:5px 0 15px;
  display:block;
  font-size:13px;
}

fieldset {
  border: medium none !important;
  margin: 0 0 10px;
  min-width: 100%;
  padding: 0;
  width: 100%;
}

form input[type="text"], form input[type="password"], form input[type="email"], form input[type="tel"], form input[type="number"], form input[type="url"], form textarea {
  width:100%;
  border:1px solid #CCC;
  background:#FFF;
  margin:0 0 5px;
  padding:10px;
}

form input[type="text"]:hover, form input[type="email"]:hover, form input[type="tel"], form input[type="number"]:hover, form input[type="url"]:hover, form textarea:hover {
  -webkit-transition:border-color 0.3s ease-in-out;
  -moz-transition:border-color 0.3s ease-in-out;
  transition:border-color 0.3s ease-in-out;
  border:1px solid #AAA;
}

form textarea {
  height:100px;
  max-width:100%;
  resize:none;
}

form button[type="submit"] {
  cursor:pointer;
  width:100%;
  border:none;
  background:#0CF;
  color:#FFF;
  margin:0 0 5px;
  padding:10px;
  font-size:15px;
}

form button[type="submit"]:hover {
  background:#09C;
  -webkit-transition:background 0.3s ease-in-out;
  -moz-transition:background 0.3s ease-in-out;
  transition:background-color 0.3s ease-in-out;
}

form button[type="submit"]:active { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }

form input:focus, form textarea:focus {
  outline:0;
  border:1px solid #999;
}
::-webkit-input-placeholder {
 color:#888;
}
:-moz-placeholder {
 color:#888;
}
::-moz-placeholder {
 color:#888;
}
:-ms-input-placeholder {
 color:#888;
}
#message{
   font-size: 1.5em; 
   color: white;
   margin-bottom: 20px;
 }
 #error{
   display: none;
 }
</style>
<div class="container">

  <form id="contact" onsubmit="register(); return false;" action="" method="post">
    <h3>Currents Campus Ambassador</h3>
    <div>&nbsp;</div>
    <div id="form">
      <fieldset>
        <input placeholder="Name" id="name" type="text" tabindex="1" required autofocus>
      </fieldset>
      <fieldset>
        <input placeholder="Email" id="email" type="email" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="Re-enter email" id="re-email" type="email" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="Date of birth (DD/MM/YYYY)" id="dob" type="text" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="College" id="college" type="text" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="Branch of Study" id="branch" type="text" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="Year of Study" id="year" type="text" tabindex="2" required>
      </fieldset>
      <fieldset>
        <input placeholder="Position of Responsibility in College (Put NA if not applicable)" id="por" type="text" tabindex="2" required="">
      </fieldset>
      <fieldset>
        <input placeholder="Mobile Number" id="mobile" type="tel" tabindex="3" required>
      </fieldset>
      <fieldset>
        <input placeholder="Phone Number (Permanent)" id="perma_phone" type="tel" tabindex="3" required>
      </fieldset>
      <fieldset>
        <input placeholder="Current Address" id="curr_addr" type="text" tabindex="3" required>
      </fieldset>
      <fieldset>
        <input placeholder="Permanent Address" id="perm_addr" type="text" tabindex="3" required>
      </fieldset>    
      <fieldset>
        <button name="submit" type="submit" onclick="register(); return false;" id="contact-submit" data-submit="...Sending">Submit</button>
      </fieldset>
    </div>
    <fieldset id="error">
      <div id="message"></div>
        <button id="accept" type="submit" onclick="redirect(); return false;" id="contact-submit" data-submit="...Sending">Okay</button>
    </fieldset>
  </form>
</div>
