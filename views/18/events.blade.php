<!DOCTYPE html>
<html lang="en">
<head>
  <title>Events | Currents'18</title>
  <link rel="shortcut icon" href="images/title_bar.png" />
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Lato" rel="stylesheet">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
  <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic|Roboto:400,300,700' rel='stylesheet' type='text/css'>
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
  <style>
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
        background-color: #20315b;
      }
    @media (max-width: 800px) {
      body {      
         background-color: #20315b;
         background: url('/images/Bg_pic.jpg') no-repeat center fixed;
      }
    }
     .jumbotron {
       color: white;
      margin-bottom: 0;
      background-color: #20315b;
    }
    footer {
      background-color: #333333;
      color: white;
      padding: 25px;
      width: 100%;
      //border: 1px solid black;
    }
    .panel-primary>.panel-heading{
      background-color: #333333;
      //border-color: #333333;
      color: white;
      text-align: center;
    }
    .col-sm-4:hover{
      opacity: 0.9;
      z-index: 10;
      transition-duration: 0.6s;
      transition-property: transform;
      transform: scale(1.0);

    }
    .panel-primary{
      border: 1px solid grey;
      //border-radius: 7px;
    }
    .panel-footer{
      //border-top: 2px solid black;
    }
    .hvr-grow {
    display: inline-block;
    vertical-align: middle;
    transform: translateZ(0);
    box-shadow: 0 0 1px rgba(0, 0, 0, 0);
    backface-visibility: hidden;
    -moz-osx-font-smoothing: grayscale;
    transition-duration: 0.3s;
    transition-property: transform;
}
.title{
      font-family: Lato;
      text-align: center;
      padding: 4%;
      font-size: 50px;
      color: #ecf0f1;
  }

.title span{
      font-family: Lato;
      color: lightgreen;
      font-weight: bold;
  }
  #container{
    flex: 1 0 auto;
  }
  </style>
</head>
<body>

<nav class="navbar navbar-default" style="position: relative;z-index: 100;">
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
        <img src="images/currents_logo.png" width="50" height="50" style="margin-top: -25%;">
      </a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
     <ul class="nav navbar-nav">
	    <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="tronicals">TRONICALS</a>
            </li>
            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="schedule">SCHEDULE</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="workshops">WORKSHOPS</a>
            </li>

            <li class="nav-item active">
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



<div>
  <div class="container text-center">
    <div class="title"><span>E</span>vents</div>
      <h3 style="font-family: Lato;color: white;">Click on an event title to know more</h3>
  </div>
</div>
<section id="container">
<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#capture"><strong>Capture Currents</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#capture">Taking pictures is savouring life intensely, every hundredth of a second. Photography is more than just taking a photo, it’s about reliving them. So if you have an eye for photography and are looking for some fun, Currents ’18 invites you to Capture Currents, an online photography event.</div>
        <div class="panel-footer collapse" id="capture" data-toggle="collapse" data-target="#capture">
                <b>Type of event: </b> Online <br/>
                <b>Prize Money: </b> INR 5000 <br/>
                <b>Special prize: </b> Personalized goodies from the judge himself <br/>
                <b>Deadline: </b> 22nd January <br/>
                <b>Rulebook: </b><a href="https://goo.gl/DbaZ4E">Rules</a> <br/>
                <b>Registration: </b> <a href="https://goo.gl/forms/WjsyCh7zSP1eV5PF3">Register here</a><br/> 
                <b>Submission: </b>capture.currents18@gmail.com(Send along with caption)<br/>
                <b>Judge: </b>Mr. Karthik Srinivasan (<a href="http://karthiksrinivasan.in/aboutus.html">
                    Bio
                </a>)<br/>
                <b>Contact: </b> Vishnu Prasath (9884128283)           
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#code-currents"><strong>Code Currents</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#code-currents"> If you have a knack for programming, then it is time to showcase your talent . Currents'18 brings to you, CODE CURRENTS, an online coding event that tests your logical, mathematical and basic programming skills. Happy Coding! </div>
        <div class="panel-footer collapse" id="code-currents" data-toggle="collapse" data-target="#code-currents">
          <b>Type of event: </b> Online<br/>
          <b>Prize Money: </b> INR 10,000<br/>
          <b>Special prize: </b> Paid Intern by Navriti Technologies for the top 3 winners.<br/>
           250  <a href="https://www.codechef.com/MAY16/problems/LADDU">Laddus</a>  to  top  3  winners  of  the  contest  from which  winners  can  claim  cool  CodeChef  goodies.<br/>
          <b>Registration Deadline: </b>February 3, 2018<br/>
          <b>Time of the event: </b>7:30 pm - 10:00 pm, February 4, 2018<br/>
          <b>Registration: </b><a href="https://goo.gl/forms/tCYrThEiqIqsrM3B3">Register here</a><br/>
          <b>Participation link: </b>Will be sent either through EMail or Text Message<br/>

          <b>Rules and Regulations</b><br/>
            <ul>
                <li>
                    This is an IOI style contest. This means that the problems will be partially graded. You will get score for passing certain test data.The details of the failed test cases will also be visible on your solution page.
                </li>
                <li>
                    You can submit solutions as many times as you'd like, there are no penalties for incorrect submissions. Only your best correct submission will be considered.
                    Those who achieve the score first will be placed higher in the rank list in case of a tie.
                </li> 
                <li>
                    Please do not discuss strategy, suggestions or tips in the comments during a live contest.
                </li>
                <li> 
                    Posting questions clarifying the problem statement is ok. If you are unsure, email us at feedback@codechef.com .
                </li>
                <li> 
                    Discussing CodeChef 's problems or any aspect of problem, on any other platform on web, on identification, could lead to disabling of respective account and banning from the community.
                </li> 
                <li>
                    Almost all languages supported on CodeChef are allowed. Each program will be tested based on our critical test data. However output and input should be exactly as specified in the samples provided. 
                </li>
                <li>
                    Please contact stsudharshan@gmail.com for any queries during the contest.
                </li>
            </ul>
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#quiz"><strong>General Quiz</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#quiz"> Knowledge is your greatest asset. Knowledge is Power. How good is your general knowledge? Currents'18 brings to you, General Quiz, the quiz event encompassing a wide subject range. Come have fun testing your expertise with this general knowledge quiz! </div>
        <div class="panel-footer collapse" id="quiz" data-toggle="collapse" data-target="#quiz">
         <b>Date of the Event:</b> 17th February 2018<br/>
         <b>Registration: </b>On Spot Registrations can be done.<br/>   
         <b>Online registration link: </b><a href="https://goo.gl/forms/vl2ORQvMStMd5fI03">Register</a><br/>
        <b>Event Description-</b>: <br/>
        <b>Event Details-</b><br/>
        <b>Type of event: </b>Offline<br/>
        <b>Prize Money: </b>INR 5000<br/>
        <b>Format-</b><br/>

            1.) It's a general quiz which will contain questions from a wide range of fields.
            <br/>
            2.) There will be two stages: a written prelims and a finals.
            <br/>
            3.) Top 8 teams of prelims qualify for finals.
            <br/>
            4.) Top 3 finalists win cash prizes.
            <br/>
            <b>Rules-</b><br/>

            1.) Only team entries are eligible.<br/>
            2.) A team shall consist of max two persons<br/>
            3.) Cross-college teams are allowed.<br/>

            4.) The decision of the quiz-master will be final and will not be subjected to any change.<br/>
            5.) The participants shall not be allowed to use mobile or other electronic instruments.<br/>
            6.) Replacement of any participant of a team is not allowed after registration<br/>
            <b>Contact: </b>Nived Bharadwaj(9094342214)<br/>
        </div>
      </div>
    </div>
  </div>
</div><br>

<div class="container">
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#colloquium"><strong>Colloquium</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#colloquium"> Do you have a new idea in the field of Electrical and Electronics which you want to present to the world? If yes, Colloquium is the event for you. In this event, you can present a paper based on your idea. The best idea gets to take home the prize. </div>
        <div class="panel-footer collapse" id="colloquium" data-toggle="collapse" data-target="#colloquium">

            <b>Prize Money: </b>INR 10000<br/>
            <b>Special prize: </b><br/>
            Top 10 entries will get a chance to present their papers during Currents’18.<br/>
            The top 3 winners will get their papers published in “International Journal of Students’ Research in Technology & Management(IJSRTM)”<br/>

            The shortlisted teams would be invited to present during Currents ‘18 at NIT Trichy. These teams will have to confirm their participation by remitting a small fee which will be later informed through mail.<br/>

            <b>Deadline: </b> 7th February<br/>
            
            <b>Registration link: </b><a href="https://goo.gl/forms/x9008GPpVi8T6YuO2">Register here</a><br/>
            <b>Submission: </b>paper.currents18@gmail.com<br/>

            <b>Contact: </b><br/> Vishnu Prasath (9884128283)<br/>
                            L Rekha (9944585964)<br/>
                            
            <b>Rules :</b><br/>
            1) Maximum of three participants per paper and one paper per team. <br/>
            2) All the entries should be in the standard IEEE format. The topic should fall within the scope of Electrical and Electronics Engineering. <br/>
             3) The completed paper in the prescribed format should be sent to   colloquium.currents18@gmail.com <br/>
            4) The subject of the email should be the name of the first (communicating) author, followed by the College name. <br/>
            5) Plagiarism in any form will lead to disqualification of the entry. <br/>
            6) The short listing process will be strict and each paper will receive fair scrutiny. The decision of the panel in the selection process is final. <br/>
            7) The presentation (of the selected paper) can last to a maximum of 10 minutes. This will be followed by a 5 minute Q & A session. <br/>
            8) Further instructions regarding the final round will be notified to the authors via email. <br/>
            9) The participants will have to present their paper in Microsoft PowerPoint. <br/>
            10) All the team members of the selected papers have to be present during the event. <br/>

            <b>Paper format: </b><br/>
            1) The paper should be submitted in PDF format (with an A4 page size). <br/>
            2) The paper should necessarily have an abstract and its first title should necessarily be   ‘‘Introduction’’; the last two titles of the paper should necessarily be ‘‘Conclusion’’ and ‘‘References’’. <br/>
            3) The abstract should be brief containing at most 300 words. The limit on the number of pages of full length paper is at most 10 sides (including tables, figures, references etc.). Do not deviate from this format. <br/>
            4) The abstract should contain a general summary of the paper stating the problem statement, recent works, the proposed methodology and major contribution of the paper. <br/>
            5) The aforementioned points should be in order. <br/>
            6) Besides the aforementioned titles, the paper should also contain background theory, experimental analysis, simulation studies and results. However, slight deviations from these titles are accepted. <br/>
            7) Figures, tables and charts must be included within the body of the paper and each entity must be numbered accordingly. <br/>
            8) The reference numbers must be included inside the text, as and when they are relevant.
            Referencing style: The style of referencing should be uniform and consistent, i.e. author's name followed by title of the article, name of the journal/conference, month and year of publication, volume no., issue no., page no. (pp).<br/>
            9) The paper may be summarily rejected if not submitted in the prescribed format.<br/>
            

        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#dhruva"><strong>Dhruva</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#dhruva"> Every engineering student has innate talent of creativity in an artistic way. Dhruva provides the chance to project your creativity and bring out the best in you. In the initial round, basic mathematical skills will be tested. Dhruva not only tests your technical knowledge and engineering expertise but also your creativity in finding solutions when posed a critical situation.</div>
        <div class="panel-footer collapse" id="dhruva" data-toggle="collapse" data-target="#dhruva"><br>
            <b>Event Details -</b><br/>
            <b>Type of event:</b> Offline<br/>
            <b>Date of event:</b> 17th Feb, 2018.<br/>
            <b>Prize Money:</b> INR 5000<br/>
            <b>Registration link:</b><a href="https://goo.gl/forms/yNdCGadqfp01MDik1">Register</a><br/><br/>

            <b>ON SPOT REGISTRATIONS AVAILABLE</b><br/>
            <b>Contact:</b><br/>   Vishnu Prasath:  9884128283<br/>
                       Rekha: 9944585964<br/>

            <b>Event Stages:</b><br/>
            <b>STAGE 1:</b> Written test<br/>
            Candidates will be given a set of questions in which few of them will have choices and the remaining will be of puzzle type. The duration of this test will be 1 hour. The main focus of the round will be on the creativity of the candidate.<br/>
            
            <b>STAGE 2:</b> Group Discussion<br/>
            Candidates will be segregated into groups and a topic will be given on spot. The candidates need to discuss about the topic for two minutes. Evaluation will be done based on relevance of the points made by the candidate with respect to the topic and also based on the ability of a candidate to discuss it with the team.<br/>
            
            <b>STAGE 3:</b> <br/>
            <b>"Surprise" yet Anybody can do it"</b><br/>
            <b>RULES:</b><br/>
            You can have a maximum of two members per team.<br/>
            Use of calculators and any other electronic gadgets is prohibited.<br/>
            The decision of judges is final.<br/>
        </div>
      </div>
    </div>

    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#line-follower"><strong>Line Follower</strong></div>
        <div class="panel-body"  data-toggle="collapse" data-target="#line-follower"> Suppress the rebel in you and follow the line to win bragging rights! Discover the Tony Stark in you as you make the fastest robot to finish the track. Currents '18 presents Line Follower, a robotics contest to prove your mettle in dextrous design of a line follower bot. The winners get the added bonus of exciting prizes too.</div>
        <div class="panel-footer collapse" id="line-follower" data-toggle="collapse" data-target="#line-follower">
            <b>Arena Description:</b><br/>
                1. Arena consists of black line on a white background. <br/>
                2. Width of the track will be 3.00±0.2cm. <br/>
                3. Track will have straight line paths, curves and turns (90 degree, circular and obtuse angles).<br/>
                <b>Rules: </b><br/>
                1. A team can have a maximum of three members.<br/>
                2. Maximum bot size must be 30cmx30cmx30cm at start. The bot can expand after start.<br/>
                3.  No two points on the bot can have a potential difference greater than 12V.<br/>
                4. The bot must be powered only by on board batteries.<br/>
                5.  Any number of restarts can be taken from the checkpoints.<br/>
                6. Maximum time for completing the track is 10 minutes.<br/>
                7. The starting procedure of the bot should be simple and should not involve giving the bot any manual force or impulse in any direction.<br/>
                8. Participants are allowed to adjust sensors (Gain, Position etc.), change speed settings and make repairs after the first run.<br/>
                9. The decision of the judges is final.<br/>
            
                <b>Type of event:</b> Offline<br/>
                <b>Date: </b> 17 February 2018<br/>
                <b>Prize Money: </b>INR 10000<br/>
                <b>Registration link: </b><a href="https://goo.gl/forms/SuiidAoC13IksZME3">Register here</a><br/>

                <b>ON SPOT REGISTRATIONS AVAILABLE</b><br/>
                <b>Contact: </b><br/> Vishnu Prasath:9884128283<br/>
                                Rekha:9944585964

        </div>
      </div>
    </div>
  </div>

  <div class="container">
  <div class="row">
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#object"><strong>Object Model Analogy</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#object"> Have you ever wondered is it possible to apply ideas, principles, or theory in electronics in mechanical world where there is no association with electron flow! If you are one among them, then this your chance to show us what you got. Presenting to you the object model analogy where a mechanical (non electrical/electronic circuit) model should be made with respect to the given truth table or equations. The model shall abide to only the given equation but none other.
     </div>
        <div class="panel-footer collapse" id="object"  data-toggle="collapse" data-target="#object">
         Event has ended!
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#target"><strong>Trical Trivia</strong></div>
        <div class="panel-body"  data-toggle="collapse" data-target="#target"> To promote the knowledge in electrical  and electronics circuits and systems trical trivia puts before you a quest where it makes you to ponder over the neglected significants. Embrace yourself for the journey ahead of you where you can perceive and  have a glimpse of what the world of electrical and electronics engineering expects from you!</div>
        <div class="panel-footer collapse" id="target">
           Event has ended!
            
<!--            <b>Cost : </b> 
              Free<br/>

              <b>No. of rounds : </b>
              2 <br/>

              <b>Contacts : </b>
              Vishnu Prasath ( 9884128283), Sarath Sankar (8015744775) <br/>

              <b>Registration Link : </b> -->
        </div>
      </div>
    </div>
    <div class="col-sm-4">
      <div class="panel panel-primary">
        <div class="panel-heading" data-toggle="collapse" data-target="#symulate"><strong>Symulate</strong></div>
        <div class="panel-body" data-toggle="collapse" data-target="#symulate">
            <b>On spot Registrations Available.</b><br/> 
            If simulating in MATLAB interests you, CURRENTS has the perfect opportunity for you. You do not have to be a pro, being interested is all what matters. Participate in SYMULATE and show your skills using Simulink to grab prizes worth  8k.
        </div>
        <div class="panel-footer collapse" id="symulate" data-toggle="collapse" data-target="#symulate">
            <b>Event Details-</b><br/>
            <b>Type of event: </b>Offline<br/>
            <b>Prize Money: </b>INR 8000<br/>
            <b>Date: 18th </b>February<br/>
            <b>Registration: </b><a href="https://goo.gl/forms/Msza3ZmTP1Lwdq7L2">Register</a><br/>
            <b>Contact: </b><br/>
            Vishnu Prasath (9884128283)<br/>
            Vasishta(9176219040)<br/>


            <b>Rule Book</b><br/>
            1.The event is a team event with each team consisting a maximum of two people.<br/>
            2. Each team is required to bring at least one laptop with the MATLAB software pre-installed.<br/>
            3. Participants are requested to reach the venue on time. No extra time will be given on account of the participants reaching late.<br/>
            4. The event consists of two rounds- the prelims and the finals.<br/>
            5. For each round, teams will be given the questions at the start of the event which they will be required to solve within the stipulated time.<br/>
            6. Teams are required to solve the given questions individually.<br/>
            7. Discussion between teams can result in the disqualification of all the teams involved in the discussion.<br/>
            8. Plagiarism/Use of internet/ Use of text books, pre-written hand notes is strictly prohibited.<br/>
            9. Judge’s decision is final and arguments with the judges can result in disqualification.<br/>
        </div>
      </div>
    </div>
  </div>
</div><br><br>
</section>
<footer class="container-fluid text-center">
  <div class="foot">Currents '18</div>
</footer>
</body>
<!-- Global site tag (gtag.js) - Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=UA-112754407-1"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-112754407-1');
</script>

</html>
