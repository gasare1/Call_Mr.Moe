import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
export default class Login extends Component {
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            "email": this.email,
            "password": this.password
        }
        const axios = require('axios')
        axios.post('http://127.0.0.1:5000/login', data)
            .then(res => {
                localStorage.setItem('token',res.token)
                
            })
            .catch(err => {
                console.log(err)
            })
            
            
    }
    
    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit} action={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email"  onChange={e=>this.email = e.target.value} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password"  onChange={e=>this.password = e.target.value} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" value ='Submit' onClick = {this.handleSubmit} >
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}


