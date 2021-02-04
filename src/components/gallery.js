import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';
import FadeIn from 'react-fade-in';
import SideDiv from './sideDiv';

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
                const { src, width, height } = photo;
                let j = i.toString();
                temp.push({ src, width, height, key: j });
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
            <div style={{ background: '#151515', padding: 0 }}>
            <Navbar />
            <SideDiv />
            <div style={{ padding: 100, color: '#E18137', textAlign: 'center' }}>
            <FadeIn delay ="500" transitionDuration="1000">
                <h1>Gallery</h1>
                </FadeIn>
                <hr style={{ padding: 10 }} />
                <Gallery photos={this.state.photos} />
            </div>
            <Footer />
            </div>
         );
    }
}
 
export default GallerySet;