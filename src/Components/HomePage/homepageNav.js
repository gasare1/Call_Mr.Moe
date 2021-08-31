import React from 'react'
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, NavItem, MenuItem, Container, Modal} from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams,
} from "react-router-dom";
import Home from '../HomePage/HomePage';
import About from '../About/About';
import Contact from '../ContactUS/Contact';
import HomeSearch from '../ContactUS/homeSearch';
import Register from '../NavBar/Navbar/register';
import ContactModal from '../ContactUS/Contactmodal';
import { SiMinutemailer } from 'react-icons/si'
function HomepageNav() {
    const [isRegisterOpen, setRegisterOpen] = React.useState(false);
    const [isLoginOpen, setIsLoginOpen] = React.useState(false);

    const showModal = () => {
        setIsLoginOpen(true);
        setRegisterOpen(false);
    };
    const hideModal = () => {
        setIsLoginOpen(false);
        setRegisterOpen(false);
    };
    const [isContactOpen, setIsContactOpen] = React.useState(false);

    const showContactModal = () => {
        setIsContactOpen(true);
    };

    const hideContactModal = () => {
        setIsContactOpen(false);
    };


    return (
        <div>
            <div className="row">
                <div className="col-md-12">
                    <Router>
                        <Navbar collapseOnSelect expand="lg" bg="black" variant="dark" sticky='top'>
                            <Container>
                                <Navbar.Brand href="#home">Call Mr. Moe</Navbar.Brand>
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                    <Nav className="me-auto">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="">Pricing</Nav.Link>
                                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                            <NavDropdown.Item  href="#contact">About</NavDropdown.Item>
                                            <NavDropdown.Item  href="#homesearch">Search</NavDropdown.Item>
                                            <NavDropdown.Item  onClick={showContactModal} isContactOpen={isContactOpen}>Contact</NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Item href="https://valleycasa.com/preferred-lenders/">Loan Programs</NavDropdown.Item>
                                        </NavDropdown>
                                    </Nav>
                                    <Nav>
                                        <Nav.Link onClick={showModal} isLoginOpen={isLoginOpen}>Sign Up</Nav.Link>
                                        <Nav.Link eventKey={2} href="#home">
                                            Login
                                        </Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Container>
                            <Modal show={isLoginOpen} onHide={hideModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <div className='container'>
                                        <div className='col'>
                                            <div className='row'>
                                                <h1>Sign Up</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <Form >

                                    <Register />

                                </Form>

                            </Modal.Body>
                        </Modal>
                        <Modal show={isContactOpen} onHide={hideContactModal}>
                            <Modal.Header closeButton>
                                <Modal.Title>
                                    <div className='container'>
                                        <div className='col'>
                                            <div className='row'>
                                                <h1>Contact Us <SiMinutemailer /></h1>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <Form>
                                    <ContactModal />
                                </Form>
                            </Modal.Body>
                            <Modal.Footer>
                                <button onClick={hideContactModal} className="btn btn-danger">Close</button>
                            </Modal.Footer>
                        </Modal>
                        </Navbar>
                        <br />
                        <Switch>
                            <Route exact path="/">
                                <HomeSearch  path="/homesearch" component={HomeSearch} />
                                <Contact path="/contact" component={Contact} />
                                <About  path="/about" component={About} />
                            </Route>

                        </Switch>
                    </Router>
                </div>
            </div>
        </div>
    )
}

export default HomepageNav
