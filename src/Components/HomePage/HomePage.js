import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './Homeelements'
const HomePage = () => {
    AOS.init();
    return (
        <Home style={{}} id='home' className="shadow-lg p-3 mb-5 bg-white rounded">

            <div className="container-fluid" style={{ paddingTop: '15rem' }} data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="row row-6">
                    <h1 className="text-center" style={{ fontSize: '50px', fontFamily:'monospace' }}>Welcome to Call Mr Moe</h1>
                </div>
            </div>
            <section>
                <div class="container" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div class="row">
                        <div class="col-xs-12 center-block text-center">
                            <h1>The Valley Solutions Team</h1>
                            <p style={{ fontSize: '20px', fontWeight:'bold' }}>
                                “Owning a home is a keystone of wealth… both financial affluence and emotional security.”
                                “Real estate cannot be lost or stolen, nor can it be carried away. Purchased with common sense, paid for in full, and managed with reasonable care, it is about the safest investment in the world.”
                                –Franklin D. Roosevelt, U.S. President
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Home>
    )
}

export default HomePage
