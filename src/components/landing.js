import {React, Component }from "react";
import { Link } from "react-router-dom";
import "../assets/styles/landing.css";
import Navbar from "./Navbar.js";
import Footer from './footer';
import axios from 'axios';
import { VFXProvider, VFXImg } from 'react-vfx';
import _ from 'lodash';
import { API_BASE_URL } from '../config.js';

const assetLinks = ["assets/img/Landing/amplifier.png", "assets/img/Landing/battery.png", "assets/img/Landing/capacitor.png", "assets/img/Landing/led.png", "assets/img/Landing/multimeter.png", "assets/img/Landing/oscilloscope.png", "assets/img/Landing/plug.png", "assets/img/Landing/resistor.png"];
const shaderTyes = [`uniform vec2 resolution; // Resolution of the element
uniform vec2 offset;     // Position of the element in the screen
uniform float time;      // Time passed since mount
uniform sampler2D src;   // Input texture

void main() {
    // Get UV in the element
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;

    gl_FragColor = texture2D(src, uv) * (sin(time * 5.) * 0.2 + 0.9);
}`,`uniform vec2 resolution; // Resolution of the element
uniform vec2 offset;     // Position of the element in the screen
uniform float time;      // Time passed since mount
uniform sampler2D src;   // Input texture

void main() {
    // Get UV in the element
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;

    gl_FragColor = texture2D(src, uv) * (sin(time * 3.) * 0.2 + 1.0);
}`,`uniform vec2 resolution; // Resolution of the element
uniform vec2 offset;     // Position of the element in the screen
uniform float time;      // Time passed since mount
uniform sampler2D src;   // Input texture

void main() {
    // Get UV in the element
    vec2 uv = (gl_FragCoord.xy - offset) / resolution;

    gl_FragColor = texture2D(src, uv) * (sin(time * 1.) * 0.2 + 1.2);
}`];

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
    url:`${API_BASE_URL}/email`, 
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

  let assetProp = [], values = [0, 1, 2, 3, 4, 5, 6, 7];

  for(let j, x, i = values.length; i; j = parseInt(Math.random() * i), x = values[--i], values[i] = values[j], values[j] = x);

  for (let i = 0; i < 8; i++) {
    let wh = Math.floor(Math.random() * 25 + 30);
    assetProp.push({ 
      choice: i,  
      dimensions: {
        width: `${wh}vh`,
        height: `${wh}vh`
      },
      shaderType: Math.floor(Math.random() * 3),
      classNo: `landingAsset${values[i]}` 
    });
  }

  let assetList = _.times(8, (i) => (
    <VFXImg key={i} className={ assetProp[i].classNo } src={assetLinks[assetProp[i].choice]} style={ assetProp[i].dimensions }  shader={ shaderTyes[assetProp[i].shaderType] } alt="Image could not be displayed" />
  ));
    
  return (
    <VFXProvider>
    <div style={{  background:'url(/assets/img/background.png)', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', overflow: 'auto'}}>
    <Navbar/>
    
    { assetList }

  <section className="header relative pt-16 items-center flex h-screen">
  <div  className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" 
  style={{ position:'absolute',padding:0,margin:0,top:0,left:0,width: '100%',height: '100%'}}>
  <div className="container mx-auto">
          <div className="flex flex-wrap justify-center">
            <div className="w-full text-center lg:w-8/12">
  <h1 className="logo"><b><span>C</span><span>u</span>rr<span>en</span><span>ts'21</span></b></h1>


    <div className="sm:block flex flex-col mt-10">
    <Link className="a-n2" to="/events">events</Link>
    <Link className="a-n2" to="/workshops">workshops</Link>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div className="encircle bounce animated" onClick={() => {
                      window.scrollTo({ top: 600, behavior: 'smooth' })
                      }} >
      <div className="arrow"></div>
    </div>
      </section>
      <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="max-w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/assets/img/Landing/Currents.png"
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4" style={{ textAlign: 'justify' }}>
                <div className="md:pr-12">
                <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                 About Currents
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                Currents is the annual technical symposium of the Electrical and Electronics Engineering department in NIT, Trichy. Conducted by the EEE-A (Electrical and Electronics Engineering Association), the national level symposium encompasses seminars, 
                technical contests and quizzes, exhibitions, workshops and paper presentations.
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                It is regarded as one of the largest technical symposia in South Asia. 
                We also have special lectures by technical experts hailing from universities and industries across the globe.
                </p> 
                </div>
              </div>
            </div>
          </div>
        </section>
      <section className="relative">
      <div className="flex flex-wrap items-center">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto" style={{ textAlign: 'justify' }}>
              <h3 className="text-3xl text-white font-semibold">About EEE Association</h3>
                  <p className="mt-4 text-lg leading-relaxed text-white">
                  The Electrical and Electronics Engineering Association, better known as EEE-A, is the brainchild of the Department of Electrical and Electronics Engineering. Founded in 1964, the department offers one undergraduate programme (B. Tech), two postgraduate programmes (M. Tech) in Power Electronics and Power Systems and also research programmes (MSc and PhD) in various disciplines. It is known for its state-of-the-art infrastructure and teaching facilities.
 The EEE-A acts as a bridge between the students and the department. It offers a plethora of activities throughout the year that encourages students to gain in-depth understanding of the field. 
 It has always stood out of the crowd with its diverse set of activities. Events and Workshops enable the students to develop the necessary skills for the industry and academia.
              </p>
              </div>
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg">
                  <img
                    alt="..."
                    src="/assets/img/Landing/EEEA.png"
                    className="w-full align-middle rounded-t-lg"
                  />
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
                style={{boxShadow:'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ',
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
        <Footer/>
        </div>
        </VFXProvider>
  );
}
}
export default Landing;
