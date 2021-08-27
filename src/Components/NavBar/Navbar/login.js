import React, { Component, useState } from 'react'
import axios from 'axios';
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { Link, Redirect,useHistory } from 'react-router-dom';
const Login = () => {
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [redirect, setRedirect] = useState(false)

    const login = async (e) => {
        e.preventDefault()
        await fetch(' http://glenasare15.pythonanywhere.com/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({


                "username": username,
                "password": password,


            })
        });

    }

    return (
        <div>
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="username" placeholder="Enter Username" required onChange={e => setUsername(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit" value='Submit' onClick={login} >
                    Login
                </Button>
            </Form>
        </div>
    )
}

export default Login

