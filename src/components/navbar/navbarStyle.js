import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLogo = styled.h1`
font-size:20px;
text-decoration: none;
color:white;

`
export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 55px;
  background-color: #262626;
  color: white;
  z-index: -1;
`
export const NavMenu = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 100%;
  padding: 20px;
  color: white;
`

export const NavList = styled.li`
  text-decoration: none;
  color: white;
  font-size: 16px;
  margin: 0 10px;
  cursor: pointer;
  color: white;
`
export const NavLinks = styled(NavLink)`
text-decoration:none;
`

export const NavMiddle = styled.div`
`
export const NavRight =styled.div`
`
