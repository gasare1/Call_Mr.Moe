import React, { Component, useState } from 'react'
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect } from 'react-router-dom';
import Termsandcond from './Termsandcond';
const Register = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const [state, setStates] = useState('');
    const [redirect, setRedirect] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false);
    const [isTermOpen, setIsTermOpen] = React.useState(false);

    const showModal = () => {
        setIsTermOpen(true);
    };
    const hideModal = () => {
        setIsOpen(false);
        setIsTermOpen(false);
    };
    const submit = async (e) => {
        e.preventDefault()
        await fetch(' https://moesbackend.herokuapp.com/registeruser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                "email": email,
                "username": username,
                "password": password,
                "address": address,
                "city": city,
                "state": state,
                "zip": zip

            })
        });
        

        setRedirect(true);
    }
    if (redirect) {

        return <Redirect to="/home" />;
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
                    <Form.Control placeholder="1234 Main St" required onChange={e => setAddress(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder="Apartment, studio, or floor" required onChange={e => setAddress(e.target.value)} />
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridCity">
                        <Form.Label>City</Form.Label>
                        <Form.Control required onChange={e => setCity(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                        <Form.Label>State</Form.Label>
                        <Form.Select defaultValue="Choose..." >
                            <option>Choose...</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="DC">District Of Columbia</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>

                        </Form.Select>
                        <Form.Control required onChange={e => setStates(e.target.value)} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridZip">
                        <Form.Label>Zip</Form.Label>
                        <Form.Control required onChange={e => setZip(e.target.value)} />
                    </Form.Group>
                </Row>
                <Row className="mb-3">
                    <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                        <Form.Check type="checkbox" label="Agree Terms" onClick={setIsTermOpen} />
                        <Form.Control required onChange={e => setZip(e.target.value)} />
                    </Form.Group>
                </Row>

                <Button variant="primary" type="submit" value="Submit" onClick={submit, hideModal}>
                    Register
                </Button>
                <Modal.Footer>
                    <button onClick={hideModal} className="btn btn-danger">Cancel</button>
                </Modal.Footer>
            </Form>
            <Modal show={isTermOpen} onHide={hideModal}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <div className='container'>
                            <div className='col'>
                                <div className='row'>
                                    <h1>Log In</h1>
                                </div>
                            </div>
                        </div>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body >
                    <Form >

                        <Termsandcond />

                    </Form>

                </Modal.Body>
                <Modal.Footer>

                    <Button variant="primary" type="submit" onClick={hideModal}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div >
    )
}

export default Register

