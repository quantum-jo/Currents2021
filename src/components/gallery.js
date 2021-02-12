import React, { Component } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import LoadingOverlay from 'react-loading-overlay';
import SyncLoader from 'react-spinners/SyncLoader';
import { API_BASE_URL } from '../config.js';

const makeStyles = {
    wrapperDiv: {  
        backgroundImage: `url('/assets/img/Plain bg website.png')`,
        backgroundSize:'contain', 
        padding: 0 
    }, 
    mainDiv: {
        padding: 100, 
        color: '#E18137', 
        textAlign: 'center' 
    },
    hrStyle: { 
        padding: 10 
    }
};

// const testPhotos = [
//     {
//         src: '/assets/img/pic.jpg',
//         width: 4,
//         height: 4
//     },
//     {
//         src: '/assets/img/pic.jpg',
//         width: 4,
//         height: 4
//     }
// ];

class GallerySet extends Component {
    state = { 
        photos: [],
        isLoading:true
     }

    getPhotos = async () => {
        let temp = [];
        try {
            let photosList = (await axios.get(`${API_BASE_URL}/gallery`, {})).data;
            let i = 0;
            photosList.forEach(photo => {
                const { src, lightboxTitle } = photo;
                let j = i.toString();
                temp.push({ src,lightboxTitle, key: j });
                i++;
            });
        } catch(err) {
            console.log(err);
        }
        this.setState({
                photos: temp,isLoading:false
            });
    }

    componentDidMount = () => {
        this.getPhotos();
    }

    render() { 
        return ( 
            <LoadingOverlay
      active={this.state.isLoading}
      spinner={<SyncLoader color="red"/>}
    >
            <div style={ makeStyles.wrapperDiv }>
            <Navbar />
            <div style={ makeStyles.mainDiv }>
            <FadeIn delay ="500" transitionDuration="1000">
                <h1>Gallery</h1>
                </FadeIn>
                <hr style={ makeStyles.hrStyle } />
                <ResponsiveGallery images={this.state.photos} useLightBox='true'  />
            </div>
            <Footer />
            </div>
            </LoadingOverlay>
         );
    }
}
 
export default GallerySet;