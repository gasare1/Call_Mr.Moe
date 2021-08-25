import React, { Component, useState } from 'react'
import axios from 'axios';
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [isOpen,setIsOpen] = React.useState(false);

    const hideModal = () => {
        setIsOpen(false);
    };
    const submit = async (e) => {
        e.preventDefault()
        await fetch( ' https://moesdatabase.herokuapp.com/registeruser', {
            method: 'POST',
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
            
                "email": email,
                "username": username,
                "password": password

            })
        });
        
        
       setRedirect(true);
    }
    if(redirect){
       
        return <Redirect to ="/home"/>;
    }
    
    return (
        <div>
            <Form onSubmit={submit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required onChange={e => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Username</Form.Label>
                        <Form.Control type="username" placeholder="Username" required onChange={e => setUsername(e.target.value)} />
                    </Form.Group>
                    <Form.Group as={Col} controlId="formGridPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1">
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose...">
                            <option>Choose...</option>
                            <option>...</option>
                        </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>

                <Button variant="primary" type="submit" value="Submit" onClick={submit}>
                    Register
                </Button>
                <Modal.Footer>
                        <button onClick={hideModal} className="btn btn-danger">Cancel</button>
                </Modal.Footer>
            </Form>
        </div>
    )
}

export default Register

