import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { RiMenuFoldLine } from 'react-icons/ri'
import { CgMenuLeft } from 'react-icons/cg'
const heightOfMenu = "500px"

export const NavItem = styled.ul`
color:#fff;
text-align:right;
float:right;
margin:1px;

`
export const NavLink = styled.div`
color:#fff;
float:right;
cursor: pointer;
text-decoration:none;
padding-bottom:30px;
font-family: 'Mukta', sans-serif;;
font-size:15px;
justify-content:space-between;
position: sticky;

&:hover{color:#8f44fd}

@media screen and (max-width:1024px){
    display:none;
    
}


`
export const Navbar = styled.div`
background-color:#000;
position: -webkit-sticky;
position: sticky;
top:0;
z-index:5;

@media screen and (max-width:1024px){
  width:100%
}

`
export const Nav = styled.div`
height:20px;
display:flex;
align-items:center;
justify-content:center;

`
export const NavbarBrand = styled.div`
margin-left:80px;
justify-content:center;
cursor: pointer;
font-family: 'Caveat', cursive;
font-weight:bold;
font-size:20px;
@media screen and (max-width:1024px){
   align-items: center;
   justify-content:center;
   display:flex;
   padding-top:20px;
}

`
export const Collapse = styled.div`

`
export const NavbarToggler = styled(Link)`

`
export const MainFooter = styled.div`
 position:static;
   left: 0;
   bottom: 0;
   width: 100%;
   background-color: #000;
   color: white;
   text-align: center;
   height:100%;
`
export const Wrapper = styled.div`
margin-top:200px;
padding-top:50px;
position:relative;
overflow:hidden;
z-index:1;
width:500px;
height:500px;
background:#ffff;
border-radius:20px;
display:none;

transform:
   translateY(
      ${p => p.isOpen ? 0 : `-${heightOfMenu}`}
   );
   transition: transform 0.45s;
@media screen and (max-width:1024px){
   display:inline;
}
`
export const Burger = styled.button`



`
export const BurgerIcon = styled.div`
position:absolute;
z-index:1;
left:10px;
padding-bottom:30px;
cursor: pointer;
font-size:36px;
display:none;
color:#000;

color:
   ${p => p.isOpen ? 'black' : 'white'};

@media screen and (max-width:1024px){
   display:inline;
   padding-bottom:60px;
}
`
export const Content = styled.div`

transform:
   translateY(
      ${p => p.isOpen ? 0 : `-${heightOfMenu}`}
   );
   transition: transform 0.45s;
`

export const Menu = styled.div`
height:${heightOfMenu};

text-decoration:none;
justify-content:center;
align-items:center;
display:flex;
flex-direction:column;
background:#ffff;

`
export const MenuButton = styled(Link)`
cursor: pointer;
text-decoration:none;
width:150px;
height:34px;
align-items:center;
justify-content:center;
display:flex;
padding-top:50px;
border:0;
color:#45424d;
background:transparent;
font-size:16px;
font-weight:500;
&::hover{color:#8f44fd}


`