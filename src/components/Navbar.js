import React from "react";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  
  return (
      <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap"
              to="/"
            >
              Currents 2021            
              </Link>
            <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className="text-white fas fa-bars"></i>
            </button>
          </div>
          
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
              (navbarOpen ? " block rounded shadow-lg" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

            {props.path === 'events' ? null : <li className="nav-item">
            <Link
              className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/events"
            >
              Events            
              </Link>
          </li> }

          {props.path === 'workshops' ? null : <li className="nav-item">
            <Link
              className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/workshops"
            >
              Workshops            
              </Link>
          </li> }

          {props.path === 'tronicals' ? null : <li className="nav-item">
            <Link
              className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/tronicals"
            >
              Tronicals            
              </Link>
          </li> }

          {props.path === 'sr' ? null : <li className="nav-item">
            <Link
              className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/sr"
            >
              SR            
              </Link>
          </li> }

          {props.path === 'team' ? null : <li className="nav-item">
            <Link
              className="lg:text-white  lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/team"
            >
              Team           
              </Link>
          </li> }

          {props.path === 'certificate' ? null : <li className="nav-item">
            <Link
              className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/certificate"
            >
              Certificate           
              </Link>
          </li> }

          {props.path === 'gallery' ? null : <li className="nav-item">
            <Link
              className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-l"
              to="/gallery"
            >
              Gallery          
              </Link>
          </li> }
           
              
              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/currentsnitt/"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg " />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/currents-nitt/"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg " />
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.instagram.com/currents_nitt/"
                >
                  <i className="lg:text-gray-300 text-gray-500 fab fa-instagram text-lg leading-lg " />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}
