import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Grid, Image } from 'semantic-ui-react';
import { MDBCol, MDBIcon } from "mdbreact";
import axios from 'axios';
import _ from 'lodash';
import FadeIn from 'react-fade-in';

const makeStyle = {
  containerDiv: {
    padding: 0,
    background: '#000'
  },
  wrapperDiv: {
    padding: 100, 
    color: '#fff', 
    textAlign: 'center', 
    position: 'relative', 
    filter: 'drop-shadow(10px 10px 100px #EB965E) drop-shadow(-10px -10px 50px #EB965E)'
  }
};


class Team extends Component {
  state = { 
    membersData: [],
    memCount:0
   }
  
  getTeamData = async () => {
    let data = [];
    try {
      data = (await axios.get(`https://currents-backend.herokuapp.com/team`, {})).data;
    } catch(err) {
      console.log(err);
    }

    this.setState({
        membersData: data
    });

  }

  componentDidMount = () => {
    this.getTeamData();
  }

  render() { 
    const columns = _.times(this.state.membersData.length, (i) => (
      <Grid.Column key={ i } >
        <FadeIn delay="500" transitionDuration="1000">
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <Image src={ this.state.membersData[i].image } circular size="small" />
            <h5 className="font-weight-bold mt-4 mb-3">{ this.state.membersData[i].name }</h5>
            <p className="text-uppercase blue-text">{ this.state.membersData[i].position }</p>
            <ul className="list-unstyled mb-0">
              <a href={ this.state.membersData[i].facebook } className="p-2 fa-lg">
                <MDBIcon fab icon="facebook-f" className="blue-text" />
              </a>
              <a href={ this.state.membersData[i].instagram } className="p-2 fa-lg">
                <MDBIcon fab icon="instagram" className="blue-text" />
              </a>
            </ul>
          </MDBCol>
        </FadeIn>
      </Grid.Column>
    ));
    return ( 
      <div style={ makeStyle.containerDiv }>
        <Navbar path='team'/>
        
        <div style={ makeStyle.wrapperDiv }>
          <h2 className="h1-responsive font-weight-bold my-5">
              Our amazing team
          </h2>
          <p className="grey-text w-responsive mx-auto mb-5">
            Currents team strives to be the best of the best.
          </p>
          <Grid stackable centered columns="4">{ columns }</Grid>
        </div>
        <Footer />
      </div>
     );
  }
}
 
export default Team;
