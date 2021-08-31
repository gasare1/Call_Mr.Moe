import React from 'react'
import image1 from '../../images/comingsoon.jpg'
import './About.css'
import { Link } from 'react-scroll'
import Modal from "react-bootstrap/Modal";
import { FaPhone } from 'react-icons/fa'
import ContactModal from './../ContactUS/Contactmodal';
import Form from "react-bootstrap/Form";
import { SiMinutemailer } from 'react-icons/si'
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBRipple } from 'mdb-react-ui-kit';

const About = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (
        <div id='about' className="shadow-lg p-3 mb-5 bg-white rounded" style={{ justifyContent: 'center', alignItems: 'center',display:'flex', margin:'20px', borderRadius:'20px' }}>

            <MDBCard style={{ maxWidth: '22rem', borderRadius:'20px',margin:'100px'  }} className="shadow-lg p-3 mb-5 bg-white rounded" >
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={image1} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>Coming Soon</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Add</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <MDBCard style={{ maxWidth: '22rem', borderRadius:'20px' ,margin:'100px' }}  className="shadow-lg p-3 mb-5 bg-white rounded">
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={image1} fluid alt='...' type="image" />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>Coming Soon</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>add</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            <MDBCard className="shadow-lg p-3 mb-5 bg-white rounded" style={{ maxWidth: '22rem', borderRadius:'20px',margin:'100px'  }}  >
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={image1} fluid alt='...' />
                    <a>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                    </a>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>Coming Soon</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Add</MDBBtn>
                </MDBCardBody>
            </MDBCard>
            
           

        </div>

    )
}

export default About
