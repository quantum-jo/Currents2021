import React, { Component } from 'react';
import Navbar from './Navbar';
import Footer from './footer';
import axios from 'axios';
import { Form, Input, Button, Popup } from 'semantic-ui-react';

class Certificate extends Component {
    state = { 
        value: ''
    }

    handleChange = (e) => this.setState({ value: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state.value);
        
    }

    render() { 
        return ( 
            <div style={{ padding: 0, background: '#49617D' }}>
                <Navbar path='certificate' />
                <div>
                    <Form style={{ padding: 200 }}>
                        <Form.Group widths="equal">
                            <Form.Field 
                                id="form-input-control-number"
                                control={ Input }
                                label="Certificate Number"
                                placeholder="Enter the certificate number here for verification"
                                onChange={ this.handleChange }
                            />
                            <Popup content="Click this to verify" trigger={<Button icon="search" style= {{ marginTop: 23 }} onClick={ this.handleSubmit } />} />
                        </Form.Group>
                    </Form>
                </div>
                <Footer />
            </div>
        );
    }
}
 
export default Certificate;