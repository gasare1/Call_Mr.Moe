import React from 'react'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Home } from './Homeelements'
const HomePage = () => {
    AOS.init();
    return (
        <Home style={{}} id='home'>

            <div className="container-fluid" style={{ paddingTop: '15rem' }} data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
                <div className="row row-6">
                    <h1 className="text-center">Project Name</h1>
                </div>
            </div>
            <section>
                <div class="container" data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom" data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000">
                    <div class="row">
                        <div class="col-xs-12 center-block text-center">
                            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Home>
    )
}

export default HomePage
