import React from 'react'
import image1 from '../../images/florian-schmidinger-b_79nOqf95I-unsplash (1).jpg'
import image2 from '../../images/pixasquare-4ojhpgKpS68-unsplash (1).jpg'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import { FaPhone } from 'react-icons/fa'
import {BiUser} from 'react-icons/bi'
import {HiOutlineMail} from 'react-icons/hi'
import{SiMinutemailer} from 'react-icons/si'
import './contact.css'
import ContactModal from './Contactmodal';

const Contact = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="card text-center" id='contact'>
            <div className="card-header">
                Home Of the Week
            </div>
            <div className='container'>
                <div className='col'>
                    <div className='row'>
                        <div className='carousel'>

                            <Carousel>
                                <Carousel.Item interval={10000}>
                                    <img
                                        className="d-block w-100"
                                        src={image1}
                                        alt="Image One"
                                    />
                                    <Carousel.Caption>
                                        <h3>Label for first slide</h3>
                                        <p>Sample Text for Image One</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img
                                        className="d-block w-100 h-100"
                                        src={image1}
                                        alt="Image Two"
                                    />
                                    <Carousel.Caption>
                                        <h3>Label for second slide</h3>
                                        <p>Sample Text for Image Two</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a onClick={showModal} className="btn btn-primary">Contact Us  <FaPhone /></a>
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
            <div className="card-footer" style={{ color: '#000' }}>
                Homes Available
            </div>
        </div>
    )
}

export default Contact