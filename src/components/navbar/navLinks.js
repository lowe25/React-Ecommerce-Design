import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLinksContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;

const LinkWrapper = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  height: 100%;
  list-style: none;
`;

const LinkItem = styled.li`
  height: 100%;
  padding: 0 1.1em;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  display:flex;
  border-top:2px solid transparent;
  transition: all 200ms ease-in-out;
  &:hover{
      border-bottom:1px solid green;
  }
`;
const Links = styled(Link)`
  text-decoration: none;
  color:#FFFFFF;
`;
export function NavLinks(props) {
  return (
    <NavLinksContainer>
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
      </LinkWrapper>
    </NavLinksContainer>
  );
}
