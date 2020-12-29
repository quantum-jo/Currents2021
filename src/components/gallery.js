import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';

// const photos = [
//     {
//         src: process.env.PUBLIC_URL + '/assets/img/pic.jpg',
//         width: 4,
//         height: 4
//     }
//     // },
//     // {
//     //     src: 'http://www.w3.org/2000/svg',
//     //     width: 4,
//     //     height: 4
//     // }
// ];

class GallerySet extends Component {
    state = { 
        photos: []
     }

    getPhotos = async () => {
        try {
            this.state.photos = await (await axios.get(`https://currents-backend.herokuapp.com/gallery`, {})).data;
        } catch (err) {
            console.log(err);
        }
    }

    render() { 
        return ( 
            <div style={{ background: '#000', padding: 0 }}>
            <Navbar />
            <div style={{ padding: 100, color: 'white', textAlign: 'center' }}>
                <h1>Gallery</h1>
                <hr style={{ padding: 10 }} />
                <Gallery photos={photos} />
            </div>
            <Footer />
            </div>
         );
    }
}
 
export default GallerySet;