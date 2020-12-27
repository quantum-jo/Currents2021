import React, { Component } from 'react';
import Navbar from './Navbar';
import Card from './card';
import { Grid } from 'semantic-ui-react';
import Footer from './footer';
import axios from 'axios';
import _ from 'lodash';

class Tronicals extends Component {
    state = { 

     }

    render() { 
        return (  
            <>
                <Navbar path='tronicals' />
                <div style={{ background: '#0000' }}>
                    
                </div>  
                <Footer />
            </>
        );
    }
}
 
export default Tronicals;