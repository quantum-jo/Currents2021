import React, { Component } from 'react';
import Navbar from '../Navbar';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import { Card, Grid } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
import Footer from '../footer';
import axios from 'axios';
import _ from 'lodash';

class Tronicals extends Component {
    state = { 

     }

    render() { 
      const presidents = [];
      presidents.push({ name: 'Volume I' },
      { name: 'Volume II'},)
       
      function getTabs() {
        return presidents.map((president, index) => ({
          title: president.name,
          getContent: () => 
          
            <Grid centered stackable>
    <Grid.Column>
    <Card color='red' image='https://wepushbuttons.com.au/wp-content/uploads/2012/03/twitter-logo-small.jpg' />
    </Grid.Column>
    <Grid.Column>
    <Card color='red' image='https://wepushbuttons.com.au/wp-content/uploads/2012/03/twitter-logo-small.jpg' />
    </Grid.Column>
  </Grid>,
          /* Optional parameters */
          key: index,
          tabClassName: 'tab',
          panelClassName: 'panel',
        }));
      }
        return (  
            <>
                <div style={{ background: '#000', padding: 0 }}>
        <Navbar path='tronicals'/>
        <div style={{ paddingLeft: "5%",paddingRight: "5%", paddingTop: "10%",paddingBottom: "10%",textAlign: 'center' }}>
          <h2 className="h1-responsive text-white font-weight-bold my-5">
              Tronicals
          </h2>
          <p className="text-white w-responsive mx-auto mb-5">
            Be in touch with the latest trends in EEE
          </p>
          <FadeIn delay="1000" transitionDuration="1000">
          <Tabs items={getTabs()} showInkBar={true}/>
          </FadeIn>
          </div>
        <Footer />
      </div>
            </>
        );
    }
}
 
export default Tronicals;