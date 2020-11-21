<!DOCTYPE html>
<html>

<head>
    
    <title>Hospitality| Currents</title>
    <link rel="shortcut icon" href="images/title_bar.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css?family=Raleway:100,600" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href='http://fonts.googleapis.com/css?family=Playfair+Display:400,700,400italic|Roboto:400,300,700' rel='stylesheet' type='text/css'>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=Noto+Serif" rel="stylesheet">

</head>

    <style type="text/css">
        
        html,body{
            height: 100%;
        }

        body{
            background-color: rgb(0,0,30);
            font-family: "Roboto", arial, sans-serif;
            font-size: 18px;
            font-weight: 300;
            line-height: 1.8;       
            display: flex;
            flex-direction: column;
        }
        h1,h2{
            font-family: 'Raleway', sans-serif;
            text-align: center;
        }
       
        h1{                                         /* Currents */
            font-size: 40px;
            color: rgb(200,200,200);
            font-weight: 400;
        }
       
        h2{                                         /* About Us */ 
            font-size: 30px;
            color: rgb(0,0,30);
            font-weight: 501;
        }
       
        p{                                          /* Content */
            color: rgb(0,0,30);
            font-family: 'Noto Serif', serif;
            text-align: justify;
            font-weight: 501;
            padding: 10px;
            margin: 0px 20px 20px 20px;
            border: 1px solid grey;
            border-top: 0px;
            border-bottom: 0px;
        }

        #container{
            flex: 1 0 auto;
        }

        #content-div{                                        /* Container */
            background-color: white;
            min-width: 70%;
            margin-bottom: 30px;
            border-radius: 10px;
        }
       
        #Name{                                      /* "Currents '18" */
            background-color: rgb(0,0,30);
        }
       
        #C{                                         /* 'C' in "Currents '18" */
            font-weight: bold;
            animation-name: blink;
            animation-duration: 10s;
            animation-iteration-count: infinite;
        }
    
        footer {
          background-color: #333333;
          color: white;
          padding: 25px;
          width: 100%;
          //border: 1px solid black;
        }       
    
        /* Basic CSS animation for 'C' in 'Currents' to blink; Remove if too shabby */
        @keyframes blink{  
            0%{
                color: rgb(200,200,200);
            }
            50%{
                color: green;
            }
            100%{
                color: rgb(200,200,200);
            }
        }
        #nav-toggle{
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

            <li class="nav-item active">
              <a class="nav-link js-scroll-trigger" href="hospitality">HOSPITALITY</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="outreach">OUTREACH</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="contact">CONTACT US</a>
            </li>

            <li class="nav-item ">
              <a class="nav-link js-scroll-trigger" href="about">ABOUT</a>
            </li>

            <li class="nav-item">
              <a class="nav-link js-scroll-trigger" href="faq">FAQ</a>
            </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


    <h1><span id="Name"><span id="C">C</span>urrents '18</span></h1>

    <div class="container" id="container">
        <div id="content-div" class="Absolute-Center is-Responsive">

            <h2>Hospitality</h2>

            <p>  Everyone has to pay Rs. 50 and register in the PR desk, following which they can attend any number of events, guest lectures and workshops.<br/>

            Following is the amount to be paid for accommodation, in addition to PR registration :<br/>

            A single day stay - Rs.150<br/>
            2 days stay - Rs.200<br/>
            3 days stay - Rs.250<br/>

            24 hours is considered as a single day.<br/>
            And a caution deposit of Rs.100 has to be paid, which will be refunded when you check out..</p>

        </div>
    </div>

    <footer class="container-fluid text-center sticky-footer">
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