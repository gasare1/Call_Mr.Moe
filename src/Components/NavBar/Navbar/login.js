import React, { Component } from 'react'
import axios from 'axios';
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
export default class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit = e => {
        e.preventDefault();
        const data = {
            "username": this.username,
            "password": this.password
        }
        const axios = require('axios')
        axios.post(' https://moesbackend.herokuapp.com/login', data)
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
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Enter Username"  onChange={e=>this.username = e.target.value} />
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
                    <Button variant="primary" type="submit" value ='Submit' onClick={this.handleSubmit,this.props.hideModal} >
                        Login
                    </Button>
                </Form>
            </div>
        )
    }
}


