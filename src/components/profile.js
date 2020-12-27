import {React,Component} from "react";
import axios from 'axios';
import {Icon} from 'semantic-ui-react';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

class profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
          eventDetails:""
        };
    }

    componentDidMount(){
      this.props.meta === 'Event' ?
      axios
      .get(`https://currents-backend.herokuapp.com/events/`+ this.props.name, {})
      .then(res => {
          const data = res.data
          if(data.statusCode===404)
          this.setState({
            eventDetails:"Data not found",
          })
          else this.setState({
            eventDetails:data,
          })
      })
      .catch((error) => {
          console.log(error)
      })
      :
      axios
      .get(`https://currents-backend.herokuapp.com/workshops/`+ this.props.name, {})
      .then(res => {
          const data = res.data
          if(data.statusCode===404)
          this.setState({
            eventDetails:"Data not found",
          })
          else this.setState({
            eventDetails:data,
          })
      })
      .catch((error) => {
          console.log(error)
      })
    }
    render(){
      const { name , meta, onClick} = this.props;
      const {eventDetails} =this.state;
       const extra = meta==='Event'? eventDetails.prize:eventDetails.price
  return (
    <>
      <main className="profile-page center">
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${eventDetails.img})`}}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
        <section className="relative py-16 bg-gray-300">
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                        alt="..."
                        src={eventDetails.img}
                        className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0 flex justify-center lg:pt-4 pt-8">
                    <button
                        className="bg-red-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {window.open(eventDetails.reg_link);}}
                      >
                        Register
                      </button>
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={onClick}
                      >
                        Back
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-sm text-gray-500"> {meta==='Event'? (<p>Prizes Worth INR</p>):(<p>Registration Fee INR</p>)} </span>
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        <Icon name='rupee sign'/>
                          {extra}
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                      <span className="text-sm text-gray-500">Date</span>
                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                        {eventDetails.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 mb-2">
                    {name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                   {eventDetails.desc}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-gray-800">
                       {eventDetails.long_desc}
                      </p>
                      <div>
                      <Zoom>
                        <img
                          alt="that wanaka tree"
                          src={eventDetails.img}
                          width="500"
                        />
                      </Zoom>
                      </div>
                      <button
                        className="bg-red-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => {window.open(eventDetails.reg_link);}}
                      >
                        Register
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
}
export default profile;
