import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';
import { Form, Input, Button, Popup, Segment } from 'semantic-ui-react';
import SideDiv from './sideDiv';

class Certificate extends Component {
    state = { 
        value: '',
        name: '',
        college: '',
        certificateType: '',
        position: 0,
        statusCode: 0,
        msg: ''
    }

    handleChange = (e) => this.setState({ value: e.target.value });

    handleSubmit = async (e) => {
        e.preventDefault();
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
                msg: ''
            });
        } catch(err) {
            this.setState({
                statusCode: err.response.status,
                msg: err.response.data
            });
        }
    }

    render() { 
        let { value, name, college, certificateType, position, statusCode, msg } = this.state;
        return ( 
            <div style={{ padding: 0, background: '#000' }}>
                <Navbar path='certificate' />
                <SideDiv />
                <div>
                   { (statusCode === 0 || statusCode === 200) && <Form style={{ padding: '13%', paddingBottom: '0.5%' }}>
                                                <Form.Group widths="equal">
                                                    <Form.Field 
                                                        id="form-input-control-number"
                                                        control={ Input }
                                                        label="Certificate Number"
                                                        placeholder="Enter the certificate number here for verification"
                                                        onChange={ this.handleChange }
                                                    />
                                                    <Popup content="Click this to verify" trigger={<Button icon="search" style= {{ marginTop: '2.5%' }} onClick={ this.handleSubmit } />} />
                                                </Form.Group>
                                            </Form> }
                    
                    { statusCode > 200 && <Form style={{ padding: '13%', paddingBottom: '0.5%' }}>
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
                                                    <Popup content="Click this to verify" trigger={<Button icon="search" style= {{ marginTop: '2.5%' }} onClick={ this.handleSubmit } />} />
                                                </Form.Group>
                                            </Form> }


                </div>
                { statusCode === 200 && <div style={{ margin: '4%' }}>
                                            <hr />
                                            <div style={{ background: '#fff', margin: '2% 10%' }}>
                                                <Segment.Group raised>
                                                    <Segment vertical><h4>Certificate Number:  </h4>{ value }</Segment>
                                                    <Segment vertical><h4>Name:  </h4>{ name }</Segment>
                                                    <Segment vertical><h4>College:  </h4>{ college }</Segment>
                                                    <Segment vertical><h4>Certificate Type:  </h4>{ certificateType }</Segment>
                                                    {position && <Segment vertical><h4>Position:  </h4>{ position }</Segment> }
                                                </Segment.Group>
                                            </div>       
                                        </div> }
                <Footer />
            </div>
        );
    }
}
 
export default Certificate;