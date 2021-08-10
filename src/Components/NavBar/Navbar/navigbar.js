
import {
    NavLink, NavItem, Nav, NavbarBrand, Collapse, Navbar,
    NavbarToggler, Wrapper, Burger, Content, Menu, MenuButton, BurgerIcon
} from './navbarelements'
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsHouseDoorFill, BsFillQuestionCircleFill } from 'react-icons/bs'
import { GiHouse, GiReceiveMoney } from 'react-icons/gi'
import { MdEmail } from 'react-icons/md'
import { CgMenuLeft } from 'react-icons/cg'
import { RiMenuFoldLine } from 'react-icons/ri'
import { Link } from 'react-scroll'
const Navigbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (

        <Navbar >
            <NavbarBrand style={{ color: 'white' }} href="/"><BsHouseDoorFill
            /> Call Mr.Moe
            </NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav  >
                    <NavItem >
                        <NavLink  > <Link to='home'><GiHouse /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > Home</a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink  > <Link to='about'><MdEmail /> <a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > Contact Us</a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink  > <Link to='contact'><BsFillQuestionCircleFill /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" > About </a></Link></NavLink>
                    </NavItem>
                    <NavItem >
                        <NavLink ><GiReceiveMoney /><a style={{ textDecoration: 'none', color: 'white' }} target="_blank" href="https://valleycasa.com/preferred-lenders/"> Loan Programs</a></NavLink>
                    </NavItem>
                    

                    <Wrapper isOpen={isOpen} >
                        <Content isOpen={isOpen}>
                            <Menu>
                                <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                                    < RiMenuFoldLine   > {isOpen ? "menu_open" : "menu"}</ RiMenuFoldLine >
                                </BurgerIcon>
                                <MenuButton  ><Link to='home' style={{ textDecoration: 'none', color: '#45424d' }} ><GiHouse /> Home</Link></MenuButton>
                                <MenuButton ><Link to='contact' style={{ textDecoration: 'none', color: '#45424d' }}> <MdEmail /> Contact Us</Link></MenuButton>
                                <MenuButton  ><Link to='about' spy={true} style={{ textDecoration: 'none', color: '#45424d' }}><BsFillQuestionCircleFill />About</Link></MenuButton>
                            </Menu>
                        </Content>
                    </Wrapper>

                    <BurgerIcon isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
                        <CgMenuLeft  > {isOpen ? "menu_open" : "menu"}</CgMenuLeft>
                    </BurgerIcon>

                </Nav>

            </Collapse>
        </Navbar>

    );
}

export default Navigbar
