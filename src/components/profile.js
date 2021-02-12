import { React, Component } from "react";
import axios from 'axios';
import { Icon } from 'semantic-ui-react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import { API_BASE_URL } from '../config.js';

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
      .get(`${API_BASE_URL}/events/`+ this.props.name, {})
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
      .get(`${API_BASE_URL}/workshops/`+ this.props.name, {})
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
    componentDidUpdate(){
      window.scrollTo({ top: 500, behavior: 'smooth' })
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
            className="top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${eventDetails.img})`}}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
        </section>
        <section className="relative py-16" style={{background: '#800080'}}>
          <div className="container mx-auto px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-lg -mt-64" style={{background: '#151515'}}>
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0 flex justify-center lg:pt-4 pt-8">
                    <button
                        className={`bg-red-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 
                        rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 ${eventDetails.reg_link==='Ended' ? ' opacity-50' : ''}`}
                        type="button" disabled={eventDetails.reg_link==='Ended'}
                        onClick={() => {window.open(eventDetails.reg_link);}}>
                        Register
                      </button>
                      <a href={eventDetails.rule_link} download> 
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        {this.props.meta==='Event'? <p>Rulebook</p>:<p>More Details</p>}
                      </button>
                      </a>
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
                        <span className="text-xl font-bold block uppercase tracking-wide text-white">
                        <Icon name='rupee sign'/>
                          {extra}
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                      <span className="text-sm text-gray-500">Date</span>
                        <span className="text-xl font-bold block uppercase tracking-wide text-white">
                        {eventDetails.date}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal mb-2 text-white mb-2">
                    {name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                   {eventDetails.desc}
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-white" style={{ textAlign: 'justify' }}>
                       {eventDetails.long_desc}
                      </p>
                      <div>
                      <Zoom>
                        <img
                          alt="poster"
                          src={eventDetails.poster}
                          width="500"
                        />
                      </Zoom>
                      </div>
                      <button
                       className={`bg-red-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 
                       rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150 ${eventDetails.reg_link==='Ended' ? ' opacity-50' : ''}`}
                       type="button" disabled={eventDetails.reg_link==='Ended'}
                        onClick={() => {window.open(eventDetails.reg_link);}}>
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
