import styled from "styled-components";

const AccesibilityContainer = styled.div`
  display: flex;
  margin-left:11px;
  padding:10px;
  gap:5px;
`;

const MyAccountButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 14px;
  background-color:#262626;
  cursor:pointer;
`;

const CartButton = styled.button`
  border: 0;
  outline: 0;
  padding: 8px 1em;
  color: white;
  font-size: 16px;
  font-size: 14px;
  background-color:#262626;
  cursor:pointer;
`;

export function Accessibility(props) {
  return (
    <AccesibilityContainer>
      <MyAccountButton>MyAccount</MyAccountButton>
      <CartButton>Cart</CartButton>
    </AccesibilityContainer>
  );
}
