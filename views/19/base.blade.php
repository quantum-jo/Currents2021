<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        @section('title')
        <title>Currents'20</title>
        @show
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="https://currents.nitt.edu/images/title_bar.png">
        @section('scripts')
        <link rel="stylesheet" type="text/css" media="screen" href="css/main.css" />
        <script src="js/header.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"  crossorigin="anonymous">
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" crossorigin="anonymous"></script>
        @show

    </head>
    <body>
        <div class="master_container" style="height:100%;">
            <div class="page_loader" style="display:"></div>
            <div class="main_page" id="main">
                <div class="header">
                    <div class="h_container">
                        <div class="h_logo_">
                            <a href="/">
                                <img src="https://currents.nitt.edu/images/logo-wb.png" class="h_logo_class" style="height:60px;width:60px;">
                            </a>
                        </div>
                        <div class="h_list_cont">
                            <div class="h_list">
                                <div class="h_menu_list" id="about" onclick="location.href='/'">
                                    Home
                                </div>
                                <!-- <div class="h_menu_list" id="about" onclick="location.href='/schedule'">
                                    Schedule
                                </div>
                                <div class="h_menu_list" id="events" onclick="location.href='/events'">
                                    Events
                                </div>
                                <div class="h_menu_list" id="lectures" onclick="location.href='/lectures'">
                                    Lectures
                                </div> -->
                                <div class="h_menu_list" id="workshops" onclick="location.href='/workshops'">
                                    Workshops
                                </div>
                                <div class="h_menu_list" id="eureka" onclick="location.href='/eureka'">
                                    Eureka
                                </div>
                                <div class="h_menu_list" id="volts" onclick="location.href='/volts'">
                                    Volts
                                </div>
                                <div class="h_menu_list" id="cca" onclick="location.href='/cca'">
                                    CCA
                                </div>
                                <!--<div class="h_menu_list" id="tronicals" onclick="location.href='/tronicals'">
                                    Tronicals
                                </div>
                                <div class="h_menu_list" id="sponsors" onclick="location.href='/sponsors'">
                                    Sponsors
                                </div> -->
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
                @yield('content')
            </div>
            @section('sidebar')
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
                        <div class="h_menu_list" id="about" onclick="location.href='/schedule'">
                                    Schedule
                        </div>
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
            @show
        </div>
    </body>
</html>
