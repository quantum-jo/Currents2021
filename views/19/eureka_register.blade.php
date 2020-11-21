<title>Eureka Innovation Challenge</title>
<script>
var API_BASE_URL = "{{ env('APP_BASE_URL') }}";
</script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script type="text/javascript" src="{{asset('js/eureka_script.js')}}"></script>
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
background: url("{{ asset('images/eureka-bg-cg.jpeg') }}") no-repeat;
background-color: cyan;
background-size: 100%;
}
.container {
max-width:650px;
width:100%;
margin-left: 10%;
position:relative;
}
form input[type="text"], form input[type="email"], form input[type="tel"], form input[type="url"], form input[type="number"], form textarea, form button[type="submit"], select, option { font:400 14px/16px "Open Sans", Helvetica, Arial, sans-serif; }
form {
background: rgba(255, 255, 255, 0.85);
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
form input[type="text"], form input[type="password"], form input[type="email"], form input[type="tel"], form input[type="number"], form input[type="url"], form textarea, select, option {
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
form button[type="submit"], label {
cursor:pointer;
width:100%;
border:none;
background:#0CF;
color:#FFF;
margin:0 0 5px;
padding:10px;
font-size:15px;
}
form button[type="submit"]:hover, label {
background:#09C;
-webkit-transition:background 0.3s ease-in-out;
-moz-transition:background 0.3s ease-in-out;
transition:background-color 0.3s ease-in-out;
}
form button[type="submit"]:active, label { box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.5); }
form input:focus, form textarea:focus, label {
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
label{
margin-left: 34%;
}
</style>
<div class="container">
    <form id="contact" onsubmit="register(); return false;" action="" method="post">
        <h3>Eureka</h3>
        <div>&nbsp;</div>
        <fieldset>
            <input placeholder="Team Member 1*" id="name_1" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Class / Standard*" id="class_1" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Contact number of Parent" id="contact_1" type="text" tabindex="1" autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Team Member 2*" id="name_2" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Class / Standard*" id="class_2" type="text" tabindex="1" required autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="Contact number of Parent" id="contact_2" type="text" tabindex="1" autofocus>
        </fieldset>
        <fieldset>
            <input placeholder="School*" id="school" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input placeholder="School Address*" id="school_address" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input placeholder="Teacher Coordinator*" id="coordinator" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input placeholder="Teacher Coordinator Contact Number*" id="phone" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <input placeholder="Email of Teacher Coordinator" id="email" type="text" tabindex="2" required>
        </fieldset>
        <fieldset>
            <select id="theme">
                <option value="0">Theme</option>
                <option value="1">Agriculture and Food Security</option>
                <option value="2">Energy – resources and conservation</option>
                <option value="3">Disaster management</option>
                <option value="4">Environmental issues and concerns</option>
                <option value="5">Health</option>
            </select>
        </fieldset>
        <fieldset>
            <textarea placeholder="Abstract*" id="abstract"></textarea>
        </fieldset>
        <fieldset style="padding: 2.5%;">
            <button name="submit" type="submit" onsubmit="register(); return false;" id="contact-submit" data-submit="...Sending">Submit</button>
        </fieldset>
        <fieldset>
            <div id="error" style="font-size: 1.5em; display: hidden;"></div>
        </fieldset>
    </form>
</div>