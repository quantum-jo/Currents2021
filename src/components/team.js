import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Grid, Image } from 'semantic-ui-react';
import { MDBCol, MDBIcon } from "mdbreact";
import axios from 'axios';
import _ from 'lodash';
import FadeIn from 'react-fade-in';

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
        membersData: data,
        memCount:data.length
    });
  }

  componentDidMount = () => {
    this.getTeamData();
  }

  render() { 
         const {membersData,memCount} = this.state;
    const columns = _.times(memCount, (i) => (
      <Grid.Column key={ i } >
        <FadeIn delay="500" transitionDuration="1000">
          <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
            <Image src={ membersData[i].image } circular size="small" />
            <h5 className="font-weight-bold mt-4 mb-3">{ membersData[i].name }</h5>
            <p className="text-uppercase blue-text">{ membersData[i].position }</p>
            <ul className="list-unstyled mb-0">
              <a href={ membersData[i].facebook } className="p-2 fa-lg">
                <MDBIcon fab icon="facebook-f" className="blue-text" />
              </a>
              <a href={ membersData[i].instagram } className="p-2 fa-lg">
                <MDBIcon fab icon="instagram" className="blue-text" />
              </a>
            </ul>
          </MDBCol>
        </FadeIn>
      </Grid.Column>
    ));
    return ( 
      <div style={{ background: '#000', padding: 0 }}>
        <Navbar path='team'/>
        <div style={{ padding: 100, color: 'white', textAlign: 'center' }}>
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
