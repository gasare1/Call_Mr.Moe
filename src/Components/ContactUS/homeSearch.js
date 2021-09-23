import React from 'react'
import Iframe from 'react-iframe'
import './contact.css'
import Navbar from '../NavBar/Navbar/navigbar'
const HomeSearch = () => {
    return (
        <div id='homesearch' style={{marginTop:'100px'}}>
           
            <Iframe style={{height:'100vh'}} src="https://www.homesnap.com/homes/for_sale/AZ/Chandler/85225/c_33.30202,-111.857684/z_14" id="homesearch"></Iframe>
        </div>


    )
}

export default HomeSearch
