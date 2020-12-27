import React, { Component } from 'react';
import Gallery from 'react-photo-gallery';
import Navbar from './Navbar';
import Footer from './footer';

const photos = [
    {
        src: process.env.PUBLIC_URL + '/img/pic.jpg',
        width: 4,
        height: 4
    }
    // },
    // {
    //     src: 'http://www.w3.org/2000/svg',
    //     width: 4,
    //     height: 4
    // }
];

class GallerySet extends Component {
    state = { 

     }

    render() { 
        return ( 
            <>
            <Navbar />
            <div>
                <Gallery photos={photos} />
            </div>
            <Footer />
            </>
         );
    }
}
 
export default GallerySet;