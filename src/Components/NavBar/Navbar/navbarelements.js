import styled from "styled-components";
import { Link } from "react-router-dom";
import { RiMenuFoldLine } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import image1 from "../../../images/moeslogo.png";
const heightOfMenu = "500px";

export const NavItem = styled.ul`
  color: #fff;
  text-align: right;
  float: right;
`;
export const NavLink = styled.div`
  color: #000;
  cursor: pointer;
  text-decoration: none;
  font-family: "Mukta", sans-serif;
  font-size: 20px;
  justify-content: space-between;
  position: sticky;

  &:hover {
    color: #fff;
  }

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;
export const Navbar = styled.nav`
  overflow: hidden;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%; /* Full width */
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  @media screen and (max-width: 1024px) {
    width: 100%;
  }
  &.active {
    background: #000;
  }
`;
export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;
export const NavbarBrand = styled.div`
  background-image: url(${image1});
  width: 200px;
  height: 100px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  font-size: 50px;
  margin-bottom: 20px;
  cursor: pointer;

  @media (max-width: 1080px) {
    justify-content: center;
    text-align: center;
    display: flex;
    background-position: 50% 50%;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left:300px;
  }
`;
export const Collapse = styled.div``;
export const NavbarToggler = styled(Link)``;
export const MainFooter = styled.div`
  position: static;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: #000;
  color: white;
  text-align: center;
  height: 100%;
`;
export const Wrapper = styled.div`
  display: none;

  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
  @media screen and (max-width: 1024px) {
    display: inline;
  }
`;
export const Burger = styled.button``;
export const BurgerIcon = styled.div`
  transform: translateY(${(p) => (p.isOpen ? <CgMenuLeft /> : <CgMenuLeft />)});
  transition: transform 0.45s;

  @media screen and (max-width: 2024px) {
    display: inline;
    margin: 100px;
  }
`;
export const Content = styled.div`
  transform: translateY(${(p) => (p.isOpen ? 0 : `-${heightOfMenu}`)});
  transition: transform 0.45s;
`;

export const Menu = styled.div`
  height: ${heightOfMenu};

  text-decoration: none;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  background: #fff;
`;
export const MenuButton = styled(Link)`
  cursor: pointer;
  text-decoration: none;
  width: 150px;
  height: 34px;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 50px;
  border: 0;
  color: #45424d;
  background: transparent;
  font-size: 16px;
  font-weight: 500;
  &::hover {
    color: #8f44fd;
  }
`;
export const Container = styled.div``;
export const BurgerMenu = styled.div``;
export const Mobilebtn = styled.div`


@media screen and (max-width: 1024px) {
    display: flex;
    justify-content:center;
    text-align:center;
    margin-left:'40px';
    font-size:'60px'

  }

`;