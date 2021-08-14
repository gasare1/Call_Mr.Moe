
import {
    NavLink, NavItem, Nav, NavbarBrand, Collapse, Navbar,
    NavbarToggler, Wrapper, Burger, Content, Menu, MenuButton, BurgerIcon
} from './navbarelements'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsHouseDoorFill, BsFillQuestionCircleFill, BsSearch } from 'react-icons/bs'
import { BiLogInCircle } from 'react-icons/bi'
import { GiHouse, GiReceiveMoney } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { CgMenuLeft } from 'react-icons/cg'
import { RiMenuFoldLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
import { Form, Button, Modal } from "react-bootstrap";
import{SiTwitter} from 'react-icons/si'

const Navigbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [isLoginOpen, setIsLoginOpen] = React.useState(false);

    const showModal = () => {
        setIsLoginOpen(true);
    };

    const hideModal = () => {
        setIsLoginOpen(false);
    };
    const authHandler = (err, data) => {
        console.log(err, data);
    };
    const CONSUMER_SECRET = 'wh1krGw2GEVtm5sAqU6PzlGG6JS1npO8XjiFmDwC4m2Q0cdy71'
    const CONSUMER_KEY = 'skPSQ6f9tVoUdgI193TWYbFWA'
    return (

        <Navbar >
            <NavbarBrand style={{ color: 'white' }} href="/"><BsHouseDoorFill
            /> Call Mr.Moe
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav  >
                    <NavItem >
                        <NavLink  > <Link to='home'><GiHouse /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > Home</a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink  > <Link to='about'><MdEmail /> <a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > Contact Us</a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink  > <Link to='contact'><BsFillQuestionCircleFill /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > About </a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink  > <Link to='homesearch'><BsSearch /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > Search</a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink ><GiReceiveMoney /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" href="https://valleycasa.com/preferred-lenders/"> Loan Programs</a></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink onClick={showModal} isLoginOpen={isLoginOpen}><BiLogInCircle /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > Log in</a></NavLink>
                    </NavItem>


                    <Wrapper isOpen={isOpen} >
                        <Content isOpen={isOpen}>
                            <Menu>
                                <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                                    < RiMenuFoldLine   > {isOpen ? "menu_open" : "menu"}</ RiMenuFoldLine >
                                </BurgerIcon>
                                <MenuButton  ><Link to='home' style={{ textDecoration: 'none', color: '#45424d' }} ><GiHouse /> Home</Link></MenuButton>
                                <MenuButton ><Link to='contact' style={{ textDecoration: 'none', color: '#45424d' }}> <MdEmail /> Contact Us</Link></MenuButton>
                                <MenuButton  ><Link to='about' spy={true} style={{ textDecoration: 'none', color: '#45424d' }}><BsFillQuestionCircleFill />About</Link></MenuButton>
                                <MenuButton ><Link to='about' spy={true} style={{ textDecoration: 'none', color: '#45424d' }}><BsSearch />Search</Link></MenuButton>

                                <MenuButton ><GiReceiveMoney /><a style={{ textDecoration: 'none', color: '#45424d' }} target="_blank" href="https://valleycasa.com/preferred-lenders/"> Loan Programs</a></MenuButton>


                                <MenuButton onClick={showModal} isLoginOpen={isLoginOpen}><BiLogInCircle /><a style={{ textDecoration: 'none', color: '#45424d' }} target="_blank" > Log in</a></MenuButton>

                            </Menu>
                        </Content>
                    </Wrapper>
                    <Modal show={isLoginOpen} onHide={hideModal}>
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
                            <Form>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email or Username" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Remember" />
                                </Form.Group>

                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        
                            <Button onClick={hideModal} variant="primary" type="Login">
                                Login
                            </Button>
                            <Button onClick={hideModal} variant="primary" type="Login">
                            <SiTwitter/><a style={{ textDecoration: 'none', color: '#00FFFF' }} target="_blank" href="http://127.0.0.1:4995/login/twitter"> Login With Twitter</a>
                            </Button>
                        </Modal.Footer>
                    </Modal>

                    <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        <CgMenuLeft  > {isOpen ? "menu_open" : "menu"}</CgMenuLeft>
                    </BurgerIcon>

                </Nav>

            </Collapse>
        </Navbar >

    );
}

export default Navigbar
