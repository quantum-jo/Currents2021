import React, { Component } from 'react';
import Navbar from './Navbar';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
import Footer from './footer';
import axios from 'axios';
import _ from 'lodash';

class Tronicals extends Component {
    state = { 
      tronicalDetails:""

     }
     getTronicalsData() {
      axios
          .get(`https://currents-backend.herokuapp.com/tronicals`, {})
          .then(res => {
              const data = res.data
              this.setState({
                tronicalDetails:data,
              })
          })
          .catch((error) => {
              console.log(error)
          })
        }
    componentDidMount() {
      this.getTronicalsData();
  }

    render() { 
      const {tronicalDetails}=this.state;
      const Items=[]
      _.times(tronicalDetails.length, (i) => (
        Items.push({
          title: "Volume "+tronicalDetails[i].volume_no,
          getContent: () => (<Grid centered stackable columns={4}>
            <Grid.Column>
       <div class="ui card">
       <div>
         <img src={tronicalDetails[i].issue_1_img} class="visible content"/>
       </div>
       <div class="content">
         <a class="header">Volume {tronicalDetails[i].volume_no}</a>
         <div class="meta">
           <span class="date">Issue I</span>
         </div>
       </div>
       <div class="extra content">
       <a href={tronicalDetails[i].issue_1_file} download> 
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Download
                      </button>
                      </a>
       </div>
     </div>
     </Grid.Column>
     <Grid.Column>
     <div class="ui card">
       <div>
         <img src={tronicalDetails[i].issue_1_img} class="visible content"/>
       </div>
       <div class="content">
         <a class="header">Volume {tronicalDetails[i].volume_no}</a>
         <div class="meta">
           <span class="date">Issue II</span>
         </div>
       </div>
       <div class="extra content">
       <a href={tronicalDetails[i].issue_2_file} download> 
                      <button
                        className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                      >
                        Download
                      </button>
                      </a>
       </div>
     </div>
     </Grid.Column>
     </Grid>)
        })
      ))
      ;
        return (  
            <>
                <div style={{ background: '#49617D', padding: 0 }}>
        <Navbar path='tronicals'/>
        <div style={{ paddingLeft: "5%",paddingRight: "5%", paddingTop: "10%",paddingBottom: "10%",textAlign: 'center' }}>
          <h2 className="h1-responsive text-white font-weight-bold my-5">
              Tronicals
          </h2>
          <p className="text-white w-responsive mx-auto mb-5">
            Be in touch with the latest trends in EEE
          </p>
          <FadeIn delay="1000" transitionDuration="1000">
          <Tabs items={Items} showInkBar={true}/>
          </FadeIn>
          </div>
        <Footer />
      </div>
            </>
        );
    }
}
 
export default Tronicals;