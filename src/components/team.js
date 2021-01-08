import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Grid, Image } from 'semantic-ui-react';
import { MDBCol, MDBIcon } from "mdbreact";

class Team extends Component {
  state = { 

   }

  render() { 
    return ( 
      <div style={{ background: '#000', padding: 0 }}>
        <Navbar path='team' />
        <div style={{ padding: 100, color: 'white', textAlign: 'center' }}>
          <h2 className="h1-responsive font-weight-bold my-5">
              Our amazing team
            </h2>
            <p className="grey-text w-responsive mx-auto mb-5">
              Currents team strives to be the best of the best.
            </p>


            <Grid stackable centered columns="4">
              <Grid.Column>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circular size="small" />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">Photographer</p>
              <p className="grey-text">
                Excepteur 
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
            </Grid.Column>

            <Grid.Column>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circular size="small" />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
            </Grid.Column>

            <Grid.Column>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circular size="small" />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
            </Grid.Column>

            <Grid.Column>
            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <Image src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg" circular size="small" />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">Backend Developer</p>
              <p className="grey-text">
                Perspiciatis repellendus ad odit consequuntur, eveniet earum
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
            </Grid.Column>
            </Grid>


          </div>
        <Footer />
      </div>
     );
  }
}
 
export default Team;
