import React, { Component, useState } from 'react'
import axios from 'axios';
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Redirect } from 'react-router-dom';
import {BiUser} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import { FaPhone } from 'react-icons/fa'
const ContactModal = (isOpen) => {

    const [email, setEmail] = useState('');
    const [phone, setphone] = useState('');
    const [name, setname] = useState('');
    const [info, setinfo] = useState('');
    const [redirect, setRedirect] = useState(false)


    const submit = async (e) => {
        e.preventDefault()
        await fetch(' https://moesbackend.herokuapp.com/submitrequest', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({

                "name": name,
                "email": email,
                "phone": phone,
                "additional_information": info,

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
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name <BiUser /> </Form.Label>
                        <Form.Control type="email" placeholder="First.Last Name" required onChange={e => setname(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email Address <HiOutlineMail /></Form.Label>
                        <Form.Control type="email" placeholder="name@example.com"  required onChange={e => setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Phone <FaPhone /> </Form.Label>
                        <Form.Control type="email" placeholder="###-###-###" required onChange={e => setphone(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Additional Information</Form.Label>
                        <Form.Control as="textarea" rows={3}  required onChange={e => setinfo(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button variant="primary" type="submit" value="Submit" onClick={submit}>
                    Register
                </Button>
                
            </Form>
        </div>
    )
}

export default ContactModal
