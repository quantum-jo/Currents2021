import React, { Component } from 'react';
import Navbar from './Navbar';
import Tabs from 'react-responsive-tabs';
import 'react-responsive-tabs/styles.css';
import { Grid } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';
import Footer from './footer';
import axios from 'axios';
import _ from 'lodash';
import LoadingOverlay from 'react-loading-overlay';
import SyncLoader from 'react-spinners/SyncLoader';
import { API_BASE_URL } from '../config.js';

const makeStyles = {
  cardStyle: {
    marginTop: '20px',
    marginBottom: '10px',
    background:'#151515', 
    boxShadow:'rgb(0,0,0) 10px -10px 0px -3px, #E6FB04 10px -10px , #E6FB04 0px 0px 44px 3px ',
    outline: '#E6FB04 solid 2px'
  },
  contentDiv: {
    color: '#fff'
  },
  headerA: {
    color: '#fff'
  }, 
  metaDiv: {
    color: '#fff'
  },
  extraContentDiv: {
    color: '#fff'
  }, 
  wrapperDiv: {
    backgroundImage: `url('/assets/img/Plain bg website.png')`,
    backgroundSize: 'contain', 
    padding: 0 
  },
  mainDiv: {
    paddingLeft: "5%",
    paddingRight: "5%", 
    paddingTop: "80px",
    paddingBottom: "10%",
    textAlign: 'justify' 
  }, 
  tabStyle: {
    background: 'rgba(41, 41, 41, 0.8)',
    border: '2px solid yellow',
    boxShadow: 'yellow 5px 5px'
  },
  imgStyle: {
    maxHeight: '55vh',
    width: '100%'
  },
  h2Style: {
    textAlign: 'center',
    color: 'yellow',
    fontSize:'50px'
  }
};


class Tronicals extends Component {
  state = { 
    tronicalDetails: "",
    isLoading:true
  }

  getTronicalsData() {
    axios
      .get(`${API_BASE_URL}/tronicals`, {})
      .then(res => {
          const data = res.data
          this.setState({
            tronicalDetails:data,
            isLoading:false
          })
      })
      .catch((error) => {
          console.log(error)
      });
  }
    
  componentDidMount() {
      this.getTronicalsData();
  }

  render() { 
    const { tronicalDetails } = this.state;
    const Items = [];
    _.times(tronicalDetails.length, (i) => (
      Items.push({
          title: "Volume " + tronicalDetails[i].volume_no,
          getContent: () => (
          <Grid centered stackable columns={4}>
            <FadeIn delay="500" transitionDuration="1000">
              <Grid.Column>
                <div className="ui card" style={ makeStyles.cardStyle }>
                  <div>
                    <img src={ tronicalDetails[i].issue_1_img } className="visible content" alt="/assets/img/pic.jpg" style={ makeStyles.imgStyle }/>
                  </div>
                  <div className="content" style={ makeStyles.contentDiv }>
                    <a className="header" style={ makeStyles.headerA } href="/tronicals" >Volume { tronicalDetails[i].volume_no }</a>
                    <div className="meta" style={ makeStyles.metaDiv }>
                      <span className="date">Issue I</span>
                    </div>
                  </div>
                  <div className="extra content" style={ makeStyles.extraContentDiv }>
                    <a href={ tronicalDetails[i].issue_1_file } download> 
                      <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                        Download
                      </button>
                    </a>
                  </div>
                </div>
              </Grid.Column>
            </FadeIn>

            { tronicalDetails[i].issue_2_img ? ( 
                <FadeIn delay="500" transitionDuration="1000">
                  <Grid.Column>
                    <div className="ui card" style={ makeStyles.cardStyle }>
                      <div>
                        <img src={ tronicalDetails[i].issue_2_img } className="visible content" alt="/assets/img/pic.jpg" style={ makeStyles.imgStyle }/>
                      </div>
                      <div className="content" style={ makeStyles.contentDiv }>
                        <a className="header" style={ makeStyles.headerA } href="/tronicals">Volume { tronicalDetails[i].volume_no }</a>
                        <div className="meta" style={ makeStyles.metaDiv }>
                          <span className="date">Issue II</span>
                        </div>
                      </div>
                      <div className="extra content" style={ makeStyles.extraContentDiv }>
                        <a href={ tronicalDetails[i].issue_2_file } download> 
                          <button className="bg-blue-500 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150" type="button">
                            Download
                          </button>
                        </a>
                      </div>
                    </div>
                  </Grid.Column>
                </FadeIn>
              ) : <div></div>
            }
          </Grid> )
      })
    ));

    return (  
      <LoadingOverlay
      active={this.state.isLoading}
      spinner={<SyncLoader color='yellow' />}
    >
      <div style={ makeStyles.wrapperDiv }>
        <Navbar path='tronicals'/>
        <div style={ makeStyles.mainDiv }>
          <h2 className="h1-responsive text-white font-weight-bold my-5" style={ makeStyles.h2Style }>Tronicals</h2>
          <p className="text-xl	text-white w-responsive mx-auto mb-5">
          Tronicals is the biannual technical magazine of the EEE Department, NIT Trichy. 
          It encompasses a broad range of well researched articles that explore emerging technologies and developments. 
          In addition, these magazines highlight the remarkable accomplishments of our faculty and students. 
          To make your reading experience more 
          enjoyable we have included exciting puzzles and crosswords! Do check out our previous editions below.
          </p>

          <FadeIn delay="1000" transitionDuration="1000">
            <div style={ makeStyles.tabStyle }>
              <Tabs items={Items} showInkBar={true} />
            </div>
          </FadeIn>
        </div>

        <Footer />
      </div>
      </LoadingOverlay>
    );
  }
}
 
export default Tronicals;