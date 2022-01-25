import styled from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { MenuToggle } from "./menuToggle";
import { Accessibility } from "./accesibility";
const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-top:5px;
`;

const LinkWrapper = styled.ul`
  margin: 0;
  padding:10px;
  display: flex;
  list-style: none;
  background-color:#262626;
  width: 100%;
  flex-direction: column;
  position: fixed;
  top: 50px;
  left: 0;
  z-index:1;
`;


const LinkItem = styled.li`
  width: 100%;
  padding: 0 1.1em;
  color: black;
  font-weight: 500;
  font-size: 18px;
  display: flex;
  border-top: 2px solid transparent;
  transition: all 200ms ease-in-out;
  &:hover {
    border-bottom: 1px solid green;
  }
  margin-bottom: 10px;
`;
const Links = styled(Link)`
  text-decoration: none;
  color:#FFFFFF;
`;
export function MobileNavLinks(props) {
  const [isOpen, setOpen] = useState(false); 
  return (
    <NavLinksContainer>
      <MenuToggle isOpen={isOpen} toggle={() => setOpen(!isOpen)} />
      {isOpen && (
        <LinkWrapper>
          <LinkItem>
            <Links to="/">Home</Links>
          </LinkItem>
          <LinkItem>
            <Links to="/gamingpc">Gaming PC</Links>
          </LinkItem>
          <LinkItem>
            <Links to="/gaminglaptop">Gaming Laptop</Links>
          </LinkItem>
          <LinkItem>
            <Links to="/gamingPerip">Gaming Periperals</Links>
          </LinkItem>
          <Accessibility/>
        </LinkWrapper>
      )}
    </NavLinksContainer>
  );
}
