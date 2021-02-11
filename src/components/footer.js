import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative pt-8 pb-6" style={{ background: '#4D4861' }}> { /* #800080 */}

        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <h4 className="text-3xl text-white font-semibold">Let's keep in touch!</h4>
              <h5 className="text-lg mt-0 mb-2 text-white">
                Find us on any of these platforms
              </h5>
              <div className="mt-6 lg:mb-0 mb-6">
              <button
                  className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button" onClick={() => {window.open("https://www.facebook.com/currentsnitt/");}}
                >
                  <i className="fab fa-facebook-square"></i>
                </button>
                
                <button
                  className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button" onClick={() => {window.open("https://www.linkedin.com/company/currents-nitt/");}}
                >
                  <i className="fab fa-linkedin"></i>
                </button>
                <button
                  className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                  type="button" onClick={() => {window.open("https://www.instagram.com/currents_nitt/");}}
                >
                  <i className="fab fa-instagram"></i>
                </button>
              </div>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block uppercase text-white text-sm font-semibold mb-2">
                    Useful Links
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <Link to="/about" className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">
                        About Us
                      </Link>
                    </li>
                    <li>
                    <Link to="/contact" className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                    <Link to="/team" className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm">
                        The Team
                      </Link>
                    </li>
                    <li>
                      <a
                        className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="https://www.nitt.edu/home/academics/departments/eee/"  target="_blank" rel="noreferrer"
                      >
                        EEE Department
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-400" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm font-semibold py-1" style={{fontSize: '16px', color: '#fff'}}>
                 Made with <i className="fas fa-bolt" style={{color: 'yellow'}}></i> by Webops, EEE Association
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
