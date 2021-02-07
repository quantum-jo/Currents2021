import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';
import { Form, Input, Button, Popup, Segment } from 'semantic-ui-react';
import '../assets/styles/certificate.css';
import FadeIn from 'react-fade-in';
import LoadingOverlay from 'react-loading-overlay'
import BounceLoader from 'react-spinners/SyncLoader'

const makeStyle = {
    wrapperDiv: {
        padding: 0, 
        backgroundImage: `url('/assets/img/Plain bg website.png')`,
        backgroundSize:'100% 100%',
    }, 
    footerAlign: {
        marginBottom: 200 
    }, 
    inputFormStyle: { 
        padding: '13%', 
        paddingBottom: '0.5%' 
    },
    errorFormStyle: {
        padding: '13%', paddingBottom: '0.5%'
    },
    userDisplayDiv: {
        margin: '4%' 
    },
    segmentDiv: {
        background: '#000', 
        margin: '2% 10%', 
        color: '#fff'
    }, 
    segGroup: {
        boxShadow:'rgb(0,0,0) 10px -10px 0px -3px, #FF6600 10px -10px , #CC00FF 0px 0px 44px 3px ',
        outline: '#099FFF solid 2px',
        borderRadius: 5
    },
    segField: {
        paddingLeft: '10%'
    }, 
    heading: {
        color: '#FF0099'
    }
};

class Certificate extends Component {
    state = { 
        value: '',
        name: '',
        college: '',
        certificateType: '',
        position: 0,
        statusCode: 0,
        msg: '',
        isLoading:false
    }

    handleChange = (e) => this.setState({ value: e.target.value });

    handleSubmit = async (e) => {
        e.preventDefault();
        this.setState({isLoading:true});
        let serialNo = this.state.value;
        try {
            let data = (await axios.get(`https://currents-backend.herokuapp.com/certificate?serialNo=${serialNo}`, {})).data;
            this.setState({
                value: serialNo,
                name: data.name,
                college: data.college,
                certificateType: data.certificateType,
                position: data.position,
                statusCode: 200,
                msg: '',
                isLoading:false
            });
        } catch(err) {
            this.setState({
                statusCode: err.response.status,
                msg: err.response.data,
                
            });
        }
    }

    render() { 
        let { value, name, college, certificateType, position, statusCode, msg } = this.state;
        return (
            <LoadingOverlay
            active={this.state.isLoading}
            spinner={<BounceLoader color="red"/>}>
            <div style={ makeStyle.wrapperDiv }>
                <div style={ makeStyle.footerAlign }>
                <Navbar path='certificate' />
                <div>
                   { (statusCode === 0 || statusCode === 200) && <Form style={ makeStyle.inputFormStyle }>
                                                <Form.Group widths="equal">
                                                    <input className="formField" type="text" placeholder="Enter certificate number" onChange={ this.handleChange } />
                                                    <Popup content="Click this to verify" trigger={<Button icon="search" onClick={ this.handleSubmit } />} />
                                                </Form.Group>
                                            </Form> }
                    
                    { statusCode > 200 && <Form style={ makeStyle.errorFormStyle }>
                                                <Form.Group widths="equal">
                                                    <Form.Field 
                                                        id="form-input-control-number-error"
                                                        control={ Input }
                                                        label="Certificate Number"
                                                        placeholder={ value }
                                                        error={{
                                                            content: msg,
                                                            pointing: 'below'
                                                        }}
                                                        onChange={ this.handleChange }
                                                    />
                                                    <Popup content="Click this to verify" trigger={<Button icon="search" className="searchButton" style= {{ marginTop: '2.5%' }} onClick={ this.handleSubmit } />} />
                                                </Form.Group>
                                            </Form> }
                </div>
                { statusCode === 200 && <FadeIn delay="600" transitionDuration="1000"><div style={ makeStyle.userDisplayDiv }>
                                            <hr />
                                            <div style={ makeStyle.segmentDiv}>
                                                <Segment.Group raised style={ makeStyle.segGroup }>
                                                    <Segment vertical style={ makeStyle.segField }><h4 style={makeStyle.heading}>Certificate Number:  </h4>{ value }</Segment>
                                                    <Segment vertical style={ makeStyle.segField }><h4 style={makeStyle.heading}>Name:  </h4>{ name }</Segment>
                                                    <Segment vertical style={ makeStyle.segField }><h4 style={makeStyle.heading}>College:  </h4>{ college }</Segment>
                                                    <Segment vertical style={ makeStyle.segField }><h4 style={makeStyle.heading}>Certificate Type:  </h4>{ certificateType }</Segment>
                                                    {position && <Segment vertical style={ makeStyle.segField }><h4 style={makeStyle.heading}>Position:  </h4>{ position }</Segment> }
                                                </Segment.Group>
                                            </div>       
                                        </div></FadeIn>}

                </div>
                <Footer />
            </div>
            </LoadingOverlay>
        );
    }
}
 
export default Certificate;