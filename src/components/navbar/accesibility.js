import styled from "styled-components";
import { LinkItem, Links } from "./navLinks";
const AccesibilityContainer = styled.div`
  display: flex;
  margin-left: 8px;
  gap: 5px;
`;

const MyAccountButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 14px;
  background-color: #262626;
  cursor: pointer;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
`;

const CartButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 16px;
  font-size: 14px;
  background-color: #262626;
  cursor: pointer;
  font-family: "Open Sans", Arial, Helvetica, sans-serif;
`;

export function Accessibility(props) {
  return (
    <AccesibilityContainer>
      <LinkItem>
        <Links to="/myAccount">
          <MyAccountButton>MyAccount</MyAccountButton>
        </Links>
      </LinkItem>
      <LinkItem>
        <Links to="/cartpage">
          <CartButton>Cart</CartButton>
        </Links>
      </LinkItem>
    </AccesibilityContainer>
  );
}
