import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';

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
        photos: []
     }

    getPhotos = async () => {
        try {
            let photosList =  (await axios.get(`https://currents-backend.herokuapp.com/gallery`, {})).data;
            let i = 0;
            photosList.forEach(photo => {
                const { src, width, height } = photo;
                this.state.photos.push({ src, width, height, key: i });
                i++;
            });
        } catch (err) {
            console.log(err);
        }
    }

    render() { 
        this.getPhotos();
        return ( 
            <div style={{ background: '#000', padding: 0 }}>
            <Navbar />
            <div style={{ padding: 100, color: 'white', textAlign: 'center' }}>
                <h1>Gallery</h1>
                <hr style={{ padding: 10 }} />
                <Gallery photos={this.state.photos} />
            </div>
            <Footer />
            </div>
         );
    }
}
 
export default GallerySet;