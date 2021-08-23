
import {
    NavLink, NavItem, Nav, NavbarBrand, Collapse, Navbar,
    NavbarToggler, Wrapper, Burger, Content, Menu, MenuButton, BurgerIcon
} from './navbarelements'
import React, { useState, useEffect, useContext, Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsHouseDoorFill, BsFillQuestionCircleFill, BsSearch } from 'react-icons/bs'
import { BiLogInCircle } from 'react-icons/bi'
import { GiHouse, GiReceiveMoney } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { CgMenuLeft } from 'react-icons/cg'
import { RiMenuFoldLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { SiTwitter } from 'react-icons/si'
import axios from 'axios';
import Login from './login';
export default class Register extends Component {
    constructor() {
        super();
        this.state = {
            showModal: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    handleSubmit = e => {
        e.preventDefault();
        const data = {
            "email": this.email,
            "password": this.password
        }
        const axios = require('axios')
        axios.post('http://127.0.0.1:5000/register', data)
            .then(res => {
                localStorage.setItem('token', res.token)
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Form  onSubmit={this.handleSubmit}>
                <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridEmail" >
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" onChange={e => this.email = e.target.value} />
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridPassword"  >
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" onChange={e => this.password = e.target.value} />
                    </Form.Group>
                </Row>

                <Form.Group className="mb-3" controlId="formGridAddress1"  >
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

                <Button variant="primary" type="submit" value="Submit"  >
                    Submit
                </Button>
            </Form>
        )
    }
}


