import React from 'react'
import image1 from '../../images/comingsoon.jpg'
import './About.css'
import { Link } from 'react-scroll'
const About = () => {
    return (
        <div id='about'>
            <div className="card-group">
                <div className="card">
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
                    <img className="card-img-top" src={image1} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">Coming Soon</h5>
                        <p className="card-text">Coming soon watch out!!.</p>
                    </div>
                    <div className="card-footer">
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
