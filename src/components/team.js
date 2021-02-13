import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Grid, Image } from 'semantic-ui-react';
import { MDBCol } from "mdbreact";
import axios from 'axios';
import _ from 'lodash';
import FadeIn from 'react-fade-in';
import LoadingOverlay from 'react-loading-overlay';
import BounceLoader from 'react-spinners/SyncLoader';
import { API_BASE_URL } from '../config.js';

const makeStyle = {
  containerDiv: {
    paddingTop: "50px",
    backgroundImage: `url('/assets/img/Plain bg website.png')`,
    backgroundSize: 'contain',
  },
  wrapperDiv: {
    padding: '10%', 
    color: '#fff', 
    textAlign: 'center', 
    position: 'relative'
  },
  GridStyle: {
    filter: 'drop-shadow(10px 10px 30px #EB965E) drop-shadow(-10px -10px 30px #EB965E)',
    margin: 'auto'
  },
  ImgStyle: {
    margin: 'auto'
  },
  columnStyle: {
    textAlign: 'center'
  },
  h2Style: {
    color: '#EB965E'
  }
};


class Team extends Component {
  state = { 
    membersData: [],
    memCount:0,
    isLoading:true
   }
  
  getTeamData = async () => {
    let data = [];
    try {
      data = (await axios.get(`${API_BASE_URL}/team`, {})).data;
    } catch(err) {
      console.log(err);
    }

    this.setState({
        membersData: data,isLoading:false
    });

  }

  componentDidMount = () => {
    this.getTeamData();
  }

  render() { 
    const columns = _.times(this.state.membersData.length, (i) => (
      <Grid.Column key={ i } >
        <FadeIn delay="500" transitionDuration="1000">
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-5" style={ makeStyle.columnStyle }>
            <Image src={ this.state.membersData[i].image } circular size="small" style={ makeStyle.ImgStyle }/>
            <h5 className="font-weight-bold mt-4 mb-3">{ this.state.membersData[i].name }</h5>
            <p className="text-uppercase blue-text">{ this.state.membersData[i].position }</p>
          </MDBCol>
        </FadeIn>
      </Grid.Column>
    ));
    return ( 
      <LoadingOverlay
      active={this.state.isLoading}
      spinner={<BounceLoader color='#EB965E'/>}>
      <div style={ makeStyle.containerDiv }>
        <Navbar path='team'/>
        
        <div style={ makeStyle.wrapperDiv }>
          <Grid stackable centered columns="4" style={ makeStyle.GridStyle }>{ columns }</Grid>
        </div>
        <Footer />
      </div>
      </LoadingOverlay>
     );
  }
}
 
export default Team;
