import React from 'react'
import image1 from '../../images/comingsoon.jpg'
import './About.css'
import { Link } from 'react-scroll'
import Modal from "react-bootstrap/Modal";
import { FaPhone } from 'react-icons/fa'
import ContactModal from './../ContactUS/Contactmodal';
import Form from "react-bootstrap/Form";
import{SiMinutemailer} from 'react-icons/si'

const About = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div id='about'>
            
            <div className="card-group">
                <div className="card">
                <btn  className='btn btn-secondary' >Coming Soon!!</btn>
                    <Link to='home'><img className="card-img-top" src={image1} alt="Card image cap" /></Link>
                    <div className="card-body">
                        <h5 className="card-title">Coming Soon</h5>
                        <p className="card-text">Coming soon watch out!!</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                <btn onClick={showModal} className='btn btn-secondary' >Contact Us  <FaPhone /></btn>
                <img className="card-img-top" src={image1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Coming Soon</h5>
                        <p className="card-text">Coming soon watch out!!.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <div className="card">
                <btn  className='btn btn-secondary' >Coming Soon!!</btn>
                    <img className="card-img-top" src={image1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Coming Soon</h5>
                        <p className="card-text">Coming soon watch out!!.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
                <Modal show={isOpen} onHide={hideModal}>
                    <Modal.Header  closeButton>
                        <Modal.Title>
                            <div className='container'>
                                <div className='col'>
                                    <div className='row'>
                                        <h1>Contact Us <SiMinutemailer/></h1>
                                    </div>
                                </div>
                            </div>
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <ContactModal/>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <button onClick={hideModal} className="btn btn-danger">Cancel</button>
                    </Modal.Footer>
                </Modal>
                
            </div>
            
        </div>
    )
}

export default About
