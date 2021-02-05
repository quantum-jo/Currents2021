import React, { Component } from 'react';
import ResponsiveGallery from 'react-responsive-gallery';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';
import FadeIn from 'react-fade-in';

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
     }

    getPhotos = async () => {
        let temp = [];
        try {
            let photosList = (await axios.get(`https://currents-backend.herokuapp.com/gallery`, {})).data;
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
                photos: temp
            });
    }

    componentDidMount = () => {
        this.getPhotos();
    }

    render() { 
        return ( 
            <div style={{  backgroundImage: `url('/assets/img/Plain bg website.png')`,
            backgroundSize:'100% 100%', padding: 0 }}>
            <Navbar />
            <div style={{ padding: 100, color: '#E18137', textAlign: 'center' }}>
            <FadeIn delay ="500" transitionDuration="1000">
                <h1>Gallery</h1>
                </FadeIn>
                <hr style={{ padding: 10 }} />
                <ResponsiveGallery images={this.state.photos} useLightBox='true'  />
            </div>
            <Footer />
            </div>
         );
    }
}
 
export default GallerySet;