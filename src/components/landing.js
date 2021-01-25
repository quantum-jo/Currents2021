import React from "react";
import "../assets/styles/landing.css";
import { Link } from "react-router-dom";


import Navbar from "./Navbar.js";



export default function Landing() {
  return (
    <> <Navbar/>
	<div  className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" style={{ position:'fixed',padding:0,margin:0,top:0,left:0,width: '100%',height: '100%',background:'url(/assets/img/background.png)'}}>
  <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
  <h1 class="logo"><b><span>C</span><span>u</span>rr<span>en</span><span>ts'21</span></b></h1>
		</div>
    </div>
    </div>
    </div>
    </div>
    </>
  );
}
