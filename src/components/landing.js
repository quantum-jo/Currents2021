import React from "react";
import Particles from "react-particles-js";
import { Link } from "react-router-dom";

// components

import Navbar from "./Navbar.js";
import Footer from "./footer.js";


export default function Landing() {
  return (
    <>
        <div className="bg-black ">
         <Navbar/>
         <Particles
         height="100vh"
         width="100vw"
    params={{
	    "particles": {
	        "number": {
	            "value": 10,
	            "density": {
	                "enable": true,
	                "value_area": 150
	            }
	        },
	        "line_linked": {
	            "enable": false
	        },
	        "move": {
	            "speed": 4,
	            "out_mode": "out"
	        },
	        "shape": {
	            "type": [
	                "image",
	            ],
	            "image": [
	                {
	                    "src": "https://www.flaticon.com/svg/static/icons/svg/1482/1482822.svg",
	                    "height": 20,
	                    "width": 23
                    },
                    {
	                    "src": "https://images.vexels.com/media/users/3/204836/isolated/preview/d93b1e2ddc3de434131669fc9f33a386-lightbulb-stroke-color-by-vexels.png",
	                    "height": 20,
	                    "width": 23
                    },
                    {
	                    "src": "https://cdn3.iconfinder.com/data/icons/circuit-and-pipe/128/CircuitPipe-05-512.png",
	                    "height": 20,
	                    "width": 23
	                },
	            ]
	        },
	        "size": {
	            "value": 40,
	            "random": false,
	            "anim": {
	                "enable": true,
	                "speed": 4,
	                "size_min": 10,
	                "sync": false
	            }
	        }
	    },
	    "retina_detect": true
	}} /><Footer/>
        </div>
        
    </>
  );
}
