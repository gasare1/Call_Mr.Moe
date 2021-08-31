
import {
    NavLink, NavItem, Nav, NavbarBrand, Collapse, Navbar,
    NavbarToggler, Wrapper, Burger, Content, Menu, MenuButton, BurgerIcon
} from './navbarelements'
import React, { useState, useEffect, useContext } from 'react'
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
import Register from './register';
import image1 from "../../../images/newlogo.png"
import { makeStyles } from '@material-ui/core/styles';
import ContactModal from '../../ContactUS/Contactmodal';
import { SiMinutemailer } from 'react-icons/si'

const useStyles = makeStyles((theme) => ({
    appBarTransparent: {
        backgroundColor: 'rgba (0, 0, 0, 0)'
    },
    appBarSolid: {
        backgroundColor: '#000000'
    }



}))


const Navigbar = () => {


    const classes = useStyles();
    const [navBackground, setNavBackground] = useState('appBarTransparent')
    const navRef = React.useRef()
    navRef.current = navBackground
    



    useEffect(() => {
        const handleScroll = () => {
            const show = window.scrollY > 80
            if (show) {
                setNavBackground('appBarSolid')
            } else {
                setNavBackground('appBarTransparent')
            }
        }
        document.addEventListener('scroll', handleScroll)
        return () => {
            document.removeEventListener('scroll', handleScroll)
        }
    }, [])


    const [navbar, setNavbar] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [isLoginOpen, setIsLoginOpen] = React.useState(false);
    const [isRegisterOpen, setRegisterOpen] = React.useState(false);

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


    const changeBackground = () => {
        if (window.screenY >= 80) {
            setNavbar(true)

        } else {
            setNavbar(false)
        }
    }

    window.addEventListener('scroll', changeBackground);
    return (
        <div className={classes.root} >
            <Navbar position = 'fixed' className={classes.appBarTransparent}>
                <NavbarBrand style={{ color: 'black' }} src={image1} href="/">
                    <img src={image1} style={{ color: 'black', marginBottom: '1px' }} />
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>

                    <Nav  >
                        <NavItem >
                            <NavLink  > <Link to='home'><GiHouse /><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" > Home</a></Link></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink onClick={showContactModal} isContactOpen={isContactOpen} > <MdEmail /> <a style={{ textDecoration: 'none', color: 'black' }} target="_blank" > Contact Us</a></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink  > <Link to='contact'><BsFillQuestionCircleFill /><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" > About </a></Link></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink  > <Link to='homesearch'><BsSearch /><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" > Search</a></Link></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink ><GiReceiveMoney /><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" href="https://valleycasa.com/preferred-lenders/"> Loan Programs</a></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink onClick={showModal} isLoginOpen={isLoginOpen}><BiLogInCircle /><a style={{ textDecoration: 'none', color: 'black' }} target="_blank" > Sign Up</a></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink ><a style={{ textDecoration: 'none', color: 'white' }} target="_blank"  >  </a></NavLink>
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


                                    <MenuButton onClick={showModal} isLoginOpen={isLoginOpen}><BiLogInCircle /><a style={{ textDecoration: 'none', color: '#45424d' }} target="_blank" > Sign Up</a></MenuButton>

                                </Menu>
                            </Content>
                        </Wrapper>
                        <Modal show={isRegisterOpen} onHide={hideModal}>
                            <Modal.Header closeButton  >
                                <Modal.Title>
                                    <div className='container'>
                                        <div className='col'>
                                            <div className='row'>
                                                <h1>Register</h1>
                                            </div>
                                        </div>
                                    </div>
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body >
                                <Form>

                                </Form>

                            </Modal.Body>

                        </Modal>
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
                            <Modal.Body className={classes.appBarTransparent}>
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


                        <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                            <CgMenuLeft  > {isOpen ? "menu_open" : "menu"}</CgMenuLeft>
                        </BurgerIcon>

                    </Nav>

                </Collapse>
            </Navbar >
        </div>

    );
}

export default Navigbar
