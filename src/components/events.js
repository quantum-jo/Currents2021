import {React,Component} from "react";
import Navbar from "./Navbar.js";
import Footer from "./footer.js";
import Card from "./card.js";
import Profile from "./profile.js";
import { Grid } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import axios from 'axios';
import _ from 'lodash';
import LoadingOverlay from 'react-loading-overlay';
import SyncLoader from 'react-spinners/SyncLoader';
import { API_BASE_URL } from '../config.js';
import '../assets/styles/events.css';

const makeStyles = {
  blackOverlaySpan: {
    opacity: 0.3
  },
  bgCoverDiv: { 
    backgroundImage: `url('/assets/img/Plain bg website.png')`,
    backgroundSize:'contain'
  },
  bgCoverDivNotSelected: { 
    backgroundImage: `url('/assets/img/Plain bg website.png')`,
    backgroundSize:'contain'
  }
};

class events extends Component {
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
        .get(`${API_BASE_URL}/events`, {})
        .then(res => {
            const data = res.data
            this.setState({
              eventDetails:data,
              eventCount:data.length,
              isLoading:false
            })
        })
        .catch((error) => {
            console.log(error)
        })
        
  }

  componentDidMount() {
    this.getEventsData();
  }

  render() {
    const {selectedEventTitle,isSelected,eventDetails,eventCount} = this.state;
    const columns = _.times(eventCount, (i) => (
      <Grid.Column key={i}>
        <FadeIn delay ="500" transitionDuration="1000">
          <Card title={eventDetails[i].title} prize={eventDetails[i].prize} description={eventDetails[i].desc} meta="Event"
            img ={eventDetails[i].img} date={eventDetails[i].date}
            onClick={() => { if(eventDetails[i].date==='COMING SOON')
                     console.log();
                     else {
              this.setState({isSelected:!this.state.isSelected});
              this.setState({selectedEventTitle: this.state.eventDetails[i].title});}
          }}/>
        </FadeIn>
      </Grid.Column>
    ));

    return (
      <>
      <LoadingOverlay
      active={this.state.isLoading}
      spinner={<SyncLoader color='violet' />}
    >
        <Navbar path="events" />
        <main>

          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div className="eventsImageDivContainer absolute top-0 w-full h-full bg-center bg-cover">
              <span
                id="blackOverlay"
                className="w-full h-full absolute bg-black" style={ makeStyles.blackOverlaySpan }>
              </span>
            </div>

            <div className="container relative mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                  </div>
                </div>
              </div>
            </div>
          </div>

        { isSelected ? (
            <div className="items-center bg-center bg-cover" style={ makeStyles.bgCoverDiv }>
              <section className="pb-20 -mt-24">
                <div className="container mx-auto px-4">
                  <FadeIn delay="1000" transitionDuration="1000">
                    <Profile onClick={() => {
                      this.setState({isSelected:!this.state.isSelected});
                      window.scrollTo({ top: 0, behavior: 'smooth' })
                      }} 
                      name={selectedEventTitle} meta="Event" /> 
                  </FadeIn>
                </div>
              </section>
            </div>
          )
        :(
          <section className="pb-20 -mt-24" style={ makeStyles.bgCoverDivNotSelected }>
            <div className="container mx-auto">
                <Grid stackable centered columns="3">
                  {columns}
                </Grid>
            </div>
          </section>
        )
      }
      <Footer/>
    </main>
    </LoadingOverlay>
  </>
  );
  }
}

export default events;
