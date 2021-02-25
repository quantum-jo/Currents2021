import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import Footer from "./footer.js";

const makeStyles = {
  wrapperDiv: {
    background:'url(/assets/img/background.png)', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat'  
  }
};

class about extends Component {
  state = { 
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() { 
    return (
      <div style={ makeStyles.wrapperDiv }>
        <Navbar/>
        <section className="relative py-20">
          <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src="/assets/img/Landing/Currents.jpg"
                />
              </div>

              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                    About Currents
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-white">
                    Currents is the annual technical symposium of the Electrical and Electronics Engineering department in NIT, Trichy. 
                    Conducted by the EEEA, it is a three day national level symposium encompassing seminars, technical contests and quizzes, 
                    exhibitions and paper presentations. 
                  </p>
                  <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                    It is regarded as one of the largest technical symposia in South Asia. 
                    The guest lectures in Currents are delivered by professors and technical leads from various institutions. 
                  </p>
                </div>
              </div>

            </div>
          </div>
        </section>
        <section className="relative">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl text-white font-semibold">About EEE Association</h3>
              <p className="mt-4 text-lg leading-relaxed text-white">
                The Electrical and Electronics Engineering Association, better known as EEE-A, is the brainchild of the Department of Electrical and Electronics Engineering. 
                The department was founded in 1964. It offers one undergraduate programme (B. Tech), two postgraduate programmes (M. Tech) in Power Electronics and Power Systems and also research programmes (M. S. and Ph. D) in various disciplines. 
                It is known for its state-of-the-art infrastructure and teaching facilities.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-white">
                The EEE-A acts as a bridge between the students and the department. It offers a plethora of activities throughout the year that encourages students to gain in-depth understanding of the field. It has always stood out of the crowd with its diverse set of activities. 
                Events and Workshops enable the students to develop the necessary skills for the industry and academia
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-black w-full mb-6 shadow-lg rounded-lg">
                <img
                  alt="..."
                  src="/assets/img/Landing/EEEA.png"
                  className="w-full align-middle rounded-t-lg"/>
                
              </div>
            </div>
          </div>
        </section>

        <Footer/>
      </div>
      );
    }
}

export default about;