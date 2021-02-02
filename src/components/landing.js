import {React, Component }from "react";
import "../assets/styles/landing.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar.js";



class Landing extends Component {   
  constructor(props) {
    super(props)
}
  render(){
  return (
<div style={{background:'url(/assets/img/background.png)', 'background-size': 'cover','background-repeat': 'no-repeat'}}>
    <Navbar/>
  <section className="header relative pt-16 items-center flex h-screen">
  <div  className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" 
  style={{ position:'absolute',padding:0,margin:0,top:0,left:0,width: '100%',height: '100%'}}>
  <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full text-center lg:w-8/12">
  <h1 class="logo"><b><span>C</span><span>u</span>rr<span>en</span><span>ts'21</span></b></h1>
    <div className="sm:block flex flex-col mt-10">
    <a class="a-n2" href="#">
        Neon Button
    </a>

    <a class="a-n2" href="#">
        Neon Button 
    </a>
              </div>
              </div>
    </div>
    </div>
    </div>
    <div class="encircle bounce animated">
  <div class="arrow">
  </div>
</div>
      </section>
      <section ref={ (ref) => this.myRef=ref } className="relative">
      <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                  Don't let your uses guess by attaching tooltips and popoves to
                  any element. Just make sure you enable them first via
                  JavaScript.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                  The kit comes with three pre-built pages to help you get
                  started faster. You can change the text and images and you're
                  good to go. Just make sure you enable them first via
                  JavaScript.
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-black fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Top Notch Services
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      The Arctic Ocean freezes every winter and much of the
                      sea-ice then thaws every summer, and that process will
                      continue whatever happens.
                    </p>
                  </blockquote>
                </div>
              </div>
            </div>
        </section>
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl text-white font-semibold">A growing company</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white">
                    The extension comes with three pre-built pages to help you
                    get started faster. You can change the text and images and
                    you're good to go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        </div>
  );
}
}
export default Landing;
