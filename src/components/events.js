import {React,Component} from "react";
import Navbar from "./Navbar.js";
import Footer from "./footer.js";
import Card from "./card.js";
import Profile from "./profile.js";
import { Grid } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import axios from 'axios';
import _ from 'lodash';
import LoadingOverlay from 'react-loading-overlay'
import SyncLoader from 'react-spinners/SyncLoader'

const makeStyles = {
  spanDiv: { 
    backgroundImage: `url('/assets/img/Events.png')`,
    backgroundRepeat:'no-repeat',
    backgroundSize:'100% 100%',
  },
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
        .get(`https://currents-backend.herokuapp.com/events`, {})
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
            onClick={() => {
              this.setState({isSelected:!this.state.isSelected});
              this.setState({selectedEventTitle: this.state.eventDetails[i].title});
          }}/>
        </FadeIn>
      </Grid.Column>
    ));

    return (
      <>
      <LoadingOverlay
      active={this.state.isLoading}
      spinner={<SyncLoader color='green' />}
    >
        <Navbar path="events" />
        <main>

          <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={ makeStyles.spanDiv }>
              <span
                id="blackOverlay"
                className="w-full h-full absolute bg-black" style={ makeStyles.blackOverlaySpan }>
              </span>
            </div>

            <div className="container relative mx-auto">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-12">
                      <p className="mt-10 text-lg text-gray-300">
                      Currents’21 brings to you a unique series of workshops planned meticulously to make you adept in latest technologies that govern the field of Electrical and Electronics Engineering. 
                      From basics to advanced concepts, these workshops will cover it all. 
                      Our well experienced trainers are sure to give you an enriching learning experience.
                      </p>
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
