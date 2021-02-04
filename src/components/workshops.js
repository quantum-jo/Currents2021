import {React,Component} from "react";
import Navbar from "./Navbar.js";
import Footer from "./footer.js";
import Card from "./card.js";
import Profile from "./profile.js";
import { Grid } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
import axios from 'axios';
import _ from 'lodash'
const m="Workshop"
class workshops extends Component {
  constructor(props) {
      super(props);
      this.state = {
        selectedEventTitle:"",
        eventDetails:"",
        eventCount:"",
        isSelected: false,
        isLoading:true
      };
      }
  getEventsData() {
    axios
        .get(`https://currents-backend.herokuapp.com/workshops`, {})
        .then(res => {
            const data = res.data
            this.setState({
              eventDetails:data,
              eventCount:data.length
            })
        })
        .catch((error) => {
            console.log(error)
        })
      }
  componentDidMount(){
    this.getEventsData();
}
  render(){
    const {selectedEventTitle, isSelected , eventDetails , eventCount ,isLoading} = this.state;
  const columns = _.times(eventCount, (i) => (
    <Grid.Column key={i}>
      <FadeIn delay="500" transitionDuration="1000">
      <Card title={eventDetails[i].title} prize={eventDetails[i].members_no} description={eventDetails[i].desc} meta={m} 
      img ={eventDetails[i].img} date={eventDetails[i].date}
      onClick={() => {
        this.setState({isSelected:!this.state.isSelected});
        this.setState({selectedEventTitle: this.state.eventDetails[i].title});
      }}/>
      </FadeIn>
    </Grid.Column>
  )) 
  return (
  <>
    <Navbar path="workshops" />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url('/assets/img/Workshop Common.png')`,backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute bg-black" style={{opacity:0.3}}
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="text-white font-semibold text-5xl">
                    Your story starts with us.
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    This is a simple example of a Landing Page you can build
                    using Notus React. It features multiple CSS components based
                    on the Tailwind CSS design system.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        { isSelected ? (
          <section className="pb-20 bg-black -mt-24">
          <div className="container mx-auto px-4">
            <FadeIn delay="1000" transitionDuration="1000">
              <Profile onClick={() => {
        this.setState({isSelected:!this.state.isSelected});
      }} name={selectedEventTitle} meta={m}/></FadeIn> </div>
        </section>
      )
      :(
        <section className="pb-20 bg-black -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
             <Grid stackable centered columns="3">
    {columns}
  </Grid>
            </div>
          </div>
        </section>
      )}
      <Footer/>
          </main>
    </>
  );
}
}

export default workshops;
