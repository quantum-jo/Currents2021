import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import { Image } from 'semantic-ui-react';
import FadeIn from 'react-fade-in';

const makeStyle = {
    containerDiv: {
        padding: '10%',
        color: '#3d405b',
        backgroundImage: `url('/assets/img/Plain bg website.png')`,
        backgroundSize:'contain',// hsl(210, 50%, 14%)
    },
    contentSection: {
        margin: '5%',
        padding: '3%',
        height: 'auto',
        overflow: 'auto',
        background: '#698996',
        borderRadius: '10px',
        filter: 'drop-shadow(5px 5px 10px #145e98)'
    },
    Img: {
        float: 'left',
        margin: '2%',
        height: 'auto',
        boxShadow:'rgb(0,0,0) 10px -10px 0px -3px, #197278 10px -10px'
    },
    lines: {
        background: '#9DDF27'
    },
    mainContent: {
        margin: '2%',
        textAlign: 'center'
    },
    h1Style: {
        marginBottom: '1%'
    },
    pStyle: {
        marginTop: '1%',
        textAlign: 'justify'
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
                                <Image src='/assets/img/Sr/Ashram.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1 style={ makeStyle.h1Style }>Malarchi Ashram </h1>
                                    <hr style={ makeStyle.lines } />
                                    <p style={ makeStyle.pStyle }>
                                        We at the EEE Association want to give back to the world wherever we can. Every year, we visit the renowned Malarchi Ashram and engage in various activities. 
                                        We also donate to the Ashram to help those in need the most. 
                                        The feeling of helping those in need is something that one has to experience in life, as it is an emotion with an intensity unrivaled.
                                    </p>
                                </div>
                            </section>
                            <section style={ makeStyle.contentSection }> 
                                <Image src='/assets/img/Sr/Spark.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1 style={ makeStyle.h1Style }>Spark</h1>
                                    <hr style={ makeStyle.lines } />
                                    <p style={ makeStyle.pStyle }>
                                        Spark is the social responsibility initiative taken on by the EEE Association. 
                                        This outreach includes visiting orphanages, old age homes and other similar sites, and helping those societies with our skills and abilities. 
                                        We also donate money to these places to help them with any issues regarding funding that they might have.
                                        We strongly believe in the intense importance of social responsibility in the role it plays in improving the world around us, while also helping us in better ourselves. 
                                    </p>
                                </div>
                            </section>
                            <section style={ makeStyle.contentSection }>
                                <Image src='/assets/img/Sr/Volts.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1 style={ makeStyle.h1Style }>Volts</h1>
                                    <hr style={ makeStyle.lines } />
                                    <p style={ makeStyle.pStyle }>
                                        Get ready to grind your brains and acing "Volts", the EEEA initiative of giving mock GATE exams from our college. 
                                        GATE plays a vital role, especially for those looking for higher education after graduation, however, these exams are extremely competitive in nature, testing your ability to manage time, solving through intuition and logic. 
                                        EEEA values this and prepares students to tackle the challenges up ahead.
                                    </p>
                                </div>
                            </section>
                            <section style={ makeStyle.contentSection }>
                                <Image src='/assets/img/Sr/Eureka.jpg' size='medium' rounded style={ makeStyle.Img } />
                                <div style={ makeStyle.mainContent }>
                                    <h1 style={ makeStyle.h1Style }>Eureka</h1>
                                    <hr style={ makeStyle.lines } />
                                    <p style={ makeStyle.pStyle }>
                                        From a young age, students with a budding interest in science and technology should be given a platform to present their own 
                                        hypotheses and showcase their understanding of fundamental concepts. 
                                        In the school science exhibition "Eureka", EEEA encourages kids to explore the practical application of the principles they learn while taking a step back from the perfunctory routine of schoolwork.
                                    </p>
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
