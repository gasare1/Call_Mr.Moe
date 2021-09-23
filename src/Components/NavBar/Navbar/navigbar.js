import {
  NavLink,
  NavItem,
  Nav,
  NavbarBrand,
  Collapse,
  Navbar,
  NavbarToggler,
  Wrapper,
  Burger,
  Content,
  Menu,
  MenuButton,
  BurgerIcon,
  BurgerMenu,Mobilebtn
} from "./navbarelements";
import React, { useState, useEffect, useContext, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsHouseDoorFill,
  BsFillQuestionCircleFill,
  BsSearch,
} from "react-icons/bs";
import { BiLogInCircle } from "react-icons/bi";
import { GiHouse, GiReceiveMoney } from "react-icons/gi";
import { MdEmail } from "react-icons/md";
import { CgMenuLeft } from "react-icons/cg";
import { RiMenuFoldLine } from "react-icons/ri";
import { Link } from "react-scroll";
import { Form, Button, Modal, Row, Col } from "react-bootstrap";
import { SiTwitter } from "react-icons/si";
import axios from "axios";
import Login from "./login";
import Register from "./register";
import image1 from "../../../images/newlogo.png";
import { makeStyles } from "@material-ui/core/styles";
import ContactModal from "../../ContactUS/Contactmodal";
import { SiMinutemailer } from "react-icons/si";
import { FaTimes } from "react-icons/fa";

const Navigbar = () => {
  const [navbar, setNavbar] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const [isLoginOpen, setIsLoginOpen] = React.useState(false);
  const [isRegisterOpen, setRegisterOpen] = React.useState(false);
  const [ismobileMenu, setmobileMenu] = React.useState(false);

  const showModal = () => {
    setIsLoginOpen(true);
    setRegisterOpen(false);
  };

  const hideModal = () => {
    setIsLoginOpen(false);
    setRegisterOpen(false);
    setmobileMenu(false);
  };

  const [isContactOpen, setIsContactOpen] = React.useState(false);

  const showContactModal = () => {
    setIsContactOpen(true);
  };

  const hideContactModal = () => {
    setIsContactOpen(false);
  };
  const showMobileModal = () => {
    setmobileMenu(true);
  };
  const changeBackground = () => {
    if (window.screenY >= 80) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100;
      if (navRef.current !== show) {
        setNavBackground(show);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  window.addEventListener("scroll", changeBackground);
  return (
    <Navbar
      style={{
        transition: "1s ease",
        backgroundColor: navBackground ? "black" : "transparent",
        height: "90px",
      }}
    >
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav>
          <NavbarBrand />
          <Mobilebtn><CgMenuLeft style={{marginLeft:'20px',fontSize:'40px', color:'white'}} onClick={showMobileModal} ismobileMenu={ismobileMenu} /></Mobilebtn>
          
          <NavItem>
            <NavLink>
              {" "}
              <Link to="home">
                <GiHouse />
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                  Home
                </a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={showContactModal} isContactOpen={isContactOpen}>
              {" "}
              <MdEmail />{" "}
              <a
                style={{ textDecoration: "none", color: "gray" }}
                target="_blank"
              >
                {" "}
                Contact Us
              </a>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {" "}
              <Link to="contact">
                <BsFillQuestionCircleFill />
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                  About{" "}
                </a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              {" "}
              <Link to="homesearch">
                <BsSearch />
                <a
                  style={{ textDecoration: "none", color: "gray" }}
                  target="_blank"
                >
                  {" "}
                  Search
                </a>
              </Link>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <GiReceiveMoney />
              <a
                style={{ textDecoration: "none", color: "gray" }}
                target="_blank"
                href="https://valleycasa.com/preferred-lenders/"
              >
                {" "}
                Loan Programs
              </a>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink onClick={showModal} isLoginOpen={isLoginOpen}>
              <BiLogInCircle />
              <a
                style={{ textDecoration: "none", color: "gray" }}
                target="_blank"
              >
                {" "}
                Sign Up
              </a>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink>
              <a
                style={{ textDecoration: "none", color: "gray" }}
                target="_blank"
              >
                {" "}
              </a>
            </NavLink>
          </NavItem>

          <Modal show={ismobileMenu} onHide={hideModal}>
            <Modal.Header style={{ background: "gray" }} closeButton>
              <Modal.Title>
                <div className="container">
                  <div className="col">
                    <div className="row">
                      <h1>Mobile Menu</h1>
                    </div>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form
                style={{
                  justifyContent: "center",
                  textAlign: "center",
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  flexDirection: "column",
                }}
              >
                {" "}
                <NavItem>
                  <NavLink style={{display:'flex'}}>
                    {" "}
                    <Link to="home">
                      <GiHouse />
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                      >
                        {" "}
                        Home
                      </a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  style={{display:'flex'}}
                    onClick={showContactModal}
                    isContactOpen={isContactOpen}
                  >
                    {" "}
                    <MdEmail />{" "}
                    <a
                      style={{ textDecoration: "none", color: "gray" }}
                      target="_blank"
                    >
                      {" "}
                      Contact Us
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  style={{display:'flex'}}>
                    {" "}
                    <Link to="contact">
                      <BsFillQuestionCircleFill />
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                      >
                        {" "}
                        About{" "}
                      </a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  style={{display:'flex'}}>
                    {" "}
                    <Link to="homesearch">
                      <BsSearch />
                      <a
                        style={{ textDecoration: "none", color: "gray" }}
                        target="_blank"
                      >
                        {" "}
                        Search
                      </a>
                    </Link>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink  style={{display:'flex'}}>
                    <GiReceiveMoney />
                    <a
                      style={{ textDecoration: "none", color: "gray" }}
                      target="_blank"
                      href="https://valleycasa.com/preferred-lenders/"
                    >
                      {" "}
                      Loan Programs
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem >
                  <NavLink onClick={showModal} isLoginOpen={isLoginOpen}  style={{display:'flex'}}>
                    <BiLogInCircle />
                    <a
                      style={{ textDecoration: "none", color: "gray" }}
                      target="_blank"
                    >
                      {" "}
                      Sign Up
                    </a>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink>
                    <a
                      style={{ textDecoration: "none", color: "gray" }}
                      target="_blank"
                    >
                      {" "}
                    </a>
                  </NavLink>
                </NavItem>
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={isLoginOpen} onHide={hideModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="container">
                  <div className="col">
                    <div className="row">
                      <h1>Sign Up</h1>
                    </div>
                  </div>
                </div>
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Register />
              </Form>
            </Modal.Body>
          </Modal>
          <Modal show={isContactOpen} onHide={hideContactModal}>
            <Modal.Header closeButton>
              <Modal.Title>
                <div className="container">
                  <div className="col">
                    <div className="row">
                      <h1>
                        Contact Us <SiMinutemailer />
                      </h1>
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
              <button onClick={hideContactModal} className="btn btn-danger">
                Close
              </button>
            </Modal.Footer>
          </Modal>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Navigbar;
