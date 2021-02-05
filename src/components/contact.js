import React, { Component } from 'react';
import Navbar from "./Navbar.js";
import axios from 'axios';
import Footer from "./footer.js";

const makeStyles = {
  wrapperDiv: {
    background: 'url(/assets/img/background.png)', 
    backgroundSize: 'cover', 
    backgroundRepeat: 'no-repeat'
  },
  formDiv: {
    boxShadow:'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ',
    outline: 'rgb(255,20,147) solid 2px'
  }
};

class contact extends Component {
  state = {
    name: '',
    email: '',
    institute:'',
    message: ''
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

  handleSubmit(event) {
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
    });
  }

  componentDidMount() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render() { 
    return (
      <div style={ makeStyles.wrapperDiv }>
        <Navbar/>

        <section className="relative py-20" >
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-6/12 px-4">
                <form onSubmit={this.handleSubmit.bind(this)}>
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-black" style={ makeStyles.formDiv }>
                    <div className="flex-auto p-5 lg:p-10">
                      
                      <h4 className="text-2xl text-white font-semibold">Want to contact us?</h4>
                      <p className="leading-relaxed mt-1 mb-4 text-white">
                        Complete this form and we will get back to you.
                      </p>

                      <div className="relative w-full mb-3 mt-8">
                        <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="full-name">
                          Full Name
                        </label>
                        <input value={this.state.name} onChange={this.onNameChange.bind(this)}
                          type="text"
                          className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Full Name"/>
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="email">
                          Email
                        </label>
                        <input value={this.state.email} onChange={this.onEmailChange.bind(this)}
                          type="email"
                          className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Email"/>
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="email">
                          Institute
                        </label>
                        <input value={this.state.institute} onChange={this.onInstituteChange.bind(this)}
                          type="text"
                          className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full ease-linear transition-all duration-150"
                          placeholder="Institute/College Name"/>
                      </div>

                      <div className="relative w-full mb-3">
                        <label className="block uppercase text-white text-xs font-bold mb-2" htmlFor="message">
                          Message
                        </label>
                        <textarea
                          value={this.state.message} onChange={this.onMessageChange.bind(this)}
                          rows="4"
                          cols="80"
                          className="px-3 py-3 placeholder-gray-400 text-black bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                          placeholder="Type a message..."/>
                      </div>

                      <div className="text-center mt-6">
                        <button
                          className="bg-gray-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                          type="submit">
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
    );
  }
}

export default contact;