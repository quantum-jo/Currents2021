import {React, Component }from "react";
import { Link } from "react-router-dom";
import "../assets/styles/landing.css";
import Navbar from "./Navbar.js";
import axios from 'axios';
import { VFXProvider, VFXImg } from 'react-vfx';


class Landing extends Component {   
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      institute:'',
      message: '',
    }
}
onNameChange(event) {
  this.setState({name: event.target.value})
}

onEmailChange(event) {
  this.setState({email: event.target.value})
}
onInstituteChange(event) {
  this.setState({institute: event.target.value})
}

onMessageChange(event) {
  this.setState({message: event.target.value})
}
handleSubmit( event ) {
  event.preventDefault();
  axios({
    method: "POST", 
    url:"https://currents-backend.herokuapp.com/email", 
    data:  this.state
  }).then((response)=>{
    if (response.data === 'email sent') {
      alert("Message Sent."); 
      this.setState({
        name: '',
        email: '',
        institute:'',
        message: '',
      })
    } else {
      alert("Message failed to send.")
    }
  })
}
  render(){
  return (
    <VFXProvider>
<div style={{background:'url(/assets/img/background.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}>
    <Navbar/>

    <div className="asset-wrapper-1">
      <div className="vertical-wire-1"></div>
      <VFXImg
      src="/assets/img/amplifier.png"
      shader="shine" className="hanging1" alt="/assets/img/amplifier.png"/>
    </div>
    <div className="asset-wrapper">
      <div className="vertical-wire-2"></div>
      <VFXImg
      src="/assets/img/battery.png"
      shader="shine" className="hanging2" alt="/assets/img/amplifier.png"/>
    </div>
    <div className="asset-wrapper">
      <div className="vertical-wire-3"></div>
      <VFXImg src="/assets/img/capacitor.png" shader="sinewave" className="hanging3" alt="/assets/img/capacitor.png" />
    </div>
    <div className="asset-wrapper">
        <div className="vertical-wire-4"></div> 
        <VFXImg src="/assets/img/led.png" shader='blink' className="hanging4" alt="/assets/img/led.png" />
    </div>
    <div className="asset-wrapper">
      <div className="vertical-wire-5"></div>
      <VFXImg src="/assets/img/multimeter.png" shader="rgbGlitch" className="hanging5" alt="/assets/img/multimeter.png" />
    </div>
    <div className="asset-wrapper">
      <div className="vertical-wire-6"></div>
      <VFXImg src="/assets/img/oscilloscope.png" shader='pixelate' className="hanging6" alt="/assets/img/oscilloscope.png" />
    </div>
    <div className="asset-wrapper">
      <div className="vertical-wire-7"></div>
      <VFXImg src="/assets/img/plug.png" shader="rgbShift" className="hanging7" alt="/assets/img/plug.png" />
    </div>
    <div className="asset-wrapper">
      <div className="vertical-wire-8"></div>
      <VFXImg src="/assets/img/resistor.png" shader="spring" className="hanging8" alt="/assets/img/resistor.png" />
    </div>

  <section className="header relative pt-16 items-center flex h-screen">
  <div  className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" 
  style={{ position:'absolute',padding:0,margin:0,top:0,left:0,width: '100%',height: '100%'}}>
  <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full text-center lg:w-8/12">
  <h1 class="logo"><b><span>C</span><span>u</span>rr<span>en</span><span>ts'21</span></b></h1>


    <div className="sm:block flex flex-col mt-10">
    <Link className="a-n2" to="/events">events</Link>
    <Link className="a-n2" to="/workshops">workshops</Link>
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
      <section className="relative">
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
        <section className="relative py-20" >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
              <form onSubmit={this.handleSubmit.bind(this)}>
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black"
                style={{'box-shadow':'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ',
                'outline': 'rgb(255,20,147) solid 2px'}}>
                  <div className="flex-auto p-5 lg:p-10">
                    <h4 className="text-2xl text-white font-semibold">
                      Want to contact us?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-white">
                      Complete this form and we will get back to you.
                    </p>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        Full Name
                      </label>
                      <input
                       value={this.state.name} onChange={this.onNameChange.bind(this)}
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Full Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Email
                      </label>
                      <input
                       value={this.state.email} onChange={this.onEmailChange.bind(this)}
                        type="email"
                        className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Email"
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        Institute
                      </label>
                      <input
                       value={this.state.institute} onChange={this.onInstituteChange.bind(this)}
                        type="text"
                        className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                        placeholder="Institute/College Name"
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-white text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        Message
                      </label>
                      <textarea
                       value={this.state.message} onChange={this.onMessageChange.bind(this)}
                        rows="4"
                        cols="80"
                        className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Type a message..."
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="submit"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        </div>
        </VFXProvider>
  );
}
}
export default Landing;
