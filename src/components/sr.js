import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Image } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';

const makeStyle = {
    containerDiv: {
        padding: '10%',
        color: 'aqua',
        background: 'hsl(210, 50%, 14%)'
    },
    contentSection: {
        margin: '5%',
        padding: '3%',
        height: 'auto',
        overflow: 'auto',
        background: 'hsl(210, 50%, 14%)',
        borderRadius: '10px',
        filter: 'drop-shadow(5px 5px 10px #ff00ff) drop-shadow(-5px -5px 10px #ff00ff)'
    },
    Img: {
        float: 'left',
        height: 'auto'
    },
    lines: {
        background: '#9DDF27'
    },
    mainContent: {
        margin: '1%',
        textAlign: 'center'
    }
};

class Sr extends Component {
    state = { 

    }

    render() { 
        return ( 
            <div>
                <Navbar path='sr' />
                <div style={ makeStyle.containerDiv } >
                    <FadeIn delay="500" transitionDuration="1000">
                            <section style={ makeStyle.contentSection }>
                                <Image src='/assets/img/pic.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1>Social Responsibilty Event 1</h1>
                                    <hr style={ makeStyle.lines } />
                                    <p>Large amount of text here</p>
                                </div>
                            </section>
                            <section style={ makeStyle.contentSection }> 
                                <Image src='/assets/img/pic.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1>Social Responsibilty Event 2</h1>
                                    <hr style={ makeStyle.lines } />
                                    <p>Large amount of text here</p>
                                </div>
                            </section>
                            <section style={ makeStyle.contentSection }>
                                <Image src='/assets/img/pic.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1>Social Responsibilty Event 3</h1>
                                    <hr style={ makeStyle.lines } />
                                    <p>Large amount of text here</p>
                                </div>
                            </section>
                    </FadeIn>
                </div>
                <Footer />
            </div>
        );
    }
}

export default Sr;
