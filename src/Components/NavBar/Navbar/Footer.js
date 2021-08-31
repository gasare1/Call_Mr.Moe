import React from 'react'
import { MainFooter } from './navbarelements'
import { ImFacebook, ImYoutube2 } from 'react-icons/im'
import { FaTwitter } from 'react-icons/fa'
import{BiCopyright} from 'react-icons/bi'
import{GiSwordsPower} from 'react-icons/gi'
import { NavLink, NavItem } from './navbarelements'
function Footer() {
    return (
        <div>
            <MainFooter>
                <div className='col'>
                    <div>
                        Call Mr.Moe
                    </div>
                    <div>
                    </div>

                    <div className='container d-flex flex' style={{ padding: 20 }}>
                        <NavItem >
                            <NavLink ><ImFacebook /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" href="https://www.facebook.com/"> Facebook</a></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink ><FaTwitter /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" href="https://twitter.com/home"> Twitter</a></NavLink>
                        </NavItem>
                        <NavItem >
                            <NavLink ><ImYoutube2 /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" href="https://www.youtube.com/"> Youtube</a></NavLink>
                        </NavItem>
                    </div>
                    <div className='container d-flex flex-row-reverse'>

                    <GiSwordsPower/> <p>Powered By Web's by Glen</p>
                    </div>
                    <div className='container d-flex flex-row-reverse'>

                    <BiCopyright/> <p>Call Mr.Moe 2021</p>
                    </div>
                    

                </div>



            </MainFooter>

        </div>
    )
}

export default Footer
