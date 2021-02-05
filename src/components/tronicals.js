import React, { Component } from 'react';
import Navbar from './Navbar';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import { Card, Grid, GridColumn } from 'semantic-ui-react'
import FadeIn from 'react-fade-in';
import Footer from './footer';
import axios from 'axios';
import _ from 'lodash';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/SyncLoader'

class Tronicals extends Component {
    state = { 
      tronicalDetails:"",
      isLoading:true,

     }
     getTronicalsData() {
      axios
          .get(`https://currents-backend.herokuapp.com/tronicals`, {})
          .then(res => {
              const data = res.data
              this.setState({
                tronicalDetails:data,
                isLoading:false
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
       <div class="ui card" style={{background:'black','box-shadow':'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ',
      'outline': 'rgb(255,20,147) solid 2px'}}>
       <div>
         <img src={tronicalDetails[i].issue_1_img} class="visible content"/>
       </div>
       <div class="content" style={{color:'white'}}>
         <a class="header" style={{color:'white'}}>Volume {tronicalDetails[i].volume_no}</a>
         <div class="meta" style={{color:'white'}}>
           <span class="date">Issue I</span>
         </div>
       </div>
       <div class="extra content" style={{color:'white'}}>
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
     <div class="ui card" style={{background:'black','box-shadow':'rgb(0,0,0) 10px -10px 0px -3px, rgb(254, 80, 161) 10px -10px , rgb(254, 80, 161,0.5) 0px 0px 44px 3px ',
      'outline': 'rgb(255,20,147) solid 2px'}}>
       <div>
         <img src={tronicalDetails[i].issue_1_img} class="visible content"/>
       </div>
       <div class="content" style={{color:'white'}}>
         <a class="header" style={{color:'white'}}>Volume {tronicalDetails[i].volume_no}</a>
         <div class="meta" style={{color:'white'}}>
           <span class="date">Issue II</span>
         </div>
       </div>
       <div class="extra content" style={{color:'white'}}>
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
            <LoadingOverlay
      active={this.state.isLoading}
      spinner={<BounceLoader color="red" />}
    >
                <div style={{backgroundImage: `url('/assets/img/Plain bg website.png')`,backgroundSize: 'contain', padding: 0 }}>
        <Navbar path='tronicals'/>
        
        <div style={{ paddingLeft: "5%",paddingRight: "5%", paddingTop: "10%",paddingBottom: "10%",textAlign: 'center' }}>
          <h2 className="h1-responsive text-white font-weight-bold my-5">
              Tronicals
          </h2>
          <p className="text-xl	text-white w-responsive mx-auto mb-5">
          Tronicals is the biannual technical magazine of the Department of Electrical and Electronics Engineering, 
          NIT Trichy. Each edition explores emerging technologies and developments such as Olympic Engineering, Industry 4.0, Smart Grids and much more.
          It encompasses a broad range of well researched articles that are sure to enlighten readers. 
          In addition, these magazines highlight the remarkable accomplishments of the faculty and students in our department. 
          Tronicals will also give you an insight into the activities undertaken by the EEE Association over the years. 
          To make your reading experience more enjoyable we have included exciting puzzles and crosswords! Do check out our previous editions below.
          </p>
          <FadeIn delay="1000" transitionDuration="1000">
          <Tabs items={Items} showInkBar={true}/>
          </FadeIn>
          </div>
        <Footer />
      </div>
      </LoadingOverlay>
            </>
        );
    }
}
 
export default Tronicals;