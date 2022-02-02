import React from 'react'
import image1 from '../../images/Houses/image0.jpeg'
import image2 from '../../images/Houses/image1.jpeg'
import 'bootstrap/dist/css/bootstrap.css';
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Carousel from 'react-bootstrap/Carousel';
import { FaPhone } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { HiOutlineMail } from 'react-icons/hi'
import { SiMinutemailer } from 'react-icons/si'
import './contact.css'
import ContactModal from './Contactmodal';
import image3 from '../../images/Houses/image2.jpeg'
import image4 from '../../images/Houses/image3.jpeg'
import image5 from '../../images/Houses/image4.jpeg'
import image6 from '../../images/Houses/image5.jpeg'
import image7 from '../../images/Houses/image6.jpeg'
import image8 from '../../images/Houses/image7.jpeg'
import image9 from '../../images/Houses/image8.jpeg'
import image10 from '../../images/Houses/image9.jpeg'
import image11 from '../../images/Houses/image10.jpeg'
import image12 from '../../images/Houses/image11.jpeg'
import phoenix from '../../images/phoenix-5452848_1920.jpg'
const Contact = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    const showModal = () => {
        setIsOpen(true);
    };

    const hideModal = () => {
        setIsOpen(false);
    };
    return (

        <div className="card text-center" id='contact' style ={{backgroundImage:`url(${phoenix})`}} >
            <div  style={{ color: 'black', justifyContent: 'center', alignItems: 'center', display: 'flex', fontSize:'70px',fontFamily:'Montserrat, sans-serif',marginTop:'40px' }}>
                Home Of the Week
            </div>
            <div className='container' data-aos="fade-up"
                data-aos-anchor-placement="center-bottom" data-aos-duration="2000">
                <div className='col'>
                    <div className='row'>
                        <div className='carousel'>

                            <Carousel style={{height:'70vh',width:'100%' }}  >
                                <Carousel.Item interval={10000}> 
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image1}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>1</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image2}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>2</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image3}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>3</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image4}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>4</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image5}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>5</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image6}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>Coming Soon</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image7}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>6</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image8}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>7</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000}>
                                    <img className="shadow-lg p-3 mb-5 bg-white rounded"
                                        className="d-block w-100"
                                        src={image9}
                                        alt="Image One" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>8</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item interval={10000} >
                                    <img className="shadow-lg p-3 mb-5 bg-grey rounded"
                                        className="d-block w-100"
                                        src={image10}
                                        alt="Image Two" style={{ borderRadius: '20px',height:'70vh',width:'100%' }}
                                    />
                                    <Carousel.Caption>
                                        <h3>9</h3>
                                        <p></p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            </Carousel>
                        </div>
                        
                    </div>
                </div>
                <div className="card-body">
                <h5 className="card-title" style={{ color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex',fontFamily:'Gemunu Libre, sans-serif',fontSize:'40px',fontWeight:'bolder' }}>Priced at $500,000</h5>
                <p className="card-text" style={{ color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex',fontFamily:'Gemunu Libre, sans-serif',fontSize:'20px' }}>This beauty just went on the Market-
Lets go look at this MODEL QUALITY two story beauty loaded with UPGRADES! <br/> Located in San Tan Valleys Circle Cross Ranch, <br/>this home is located on a prime CORNER LOT with no neighbors directly behind. Wonderful DUAL MASTER floor plan with 4 Beds, 3.5 Baths, loft, and MEDIA ROOM.<br/> Home features granite countertops, walk in master spa shower, and tandem 3 car garage. <br/>Unwind under the twinkle of party lights amidst partnered with MISTERS and spacious patio! NO need to wait for a new build with this beauty ready to go! <br/>- Call Mr Moe - KW East Valley</p>

            </div>
            </div>

           

        </div>



    )
}

export default Contact
