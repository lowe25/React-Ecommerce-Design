import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)`
  text-decoration: none;
`;

export const CheckoutContainer = styled.div`
  min-height: 640px;
  display: grid;
  align-items: center;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
`;

export const CheckoutMain = styled.div`
  position: relative;
  top: -4%;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 150px;
`;

export const ContactInfo = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 18px;
  .txtFname,
  .txtLname {
    height: 40px;
    width: 270px;
  }
  .txtNum,
  .txtAdd,
  .txtApt,
  .txtCity {
    height: 40px;
    width: 550px;
  }
`;

export const PersonInfo = styled.div`
  display: flex;
  gap: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  .btn-cart,
  .btn-checkout {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    height: 40px;
    width: 230px;
    cursor: pointer;
  }
`;
//2nd Column
export const ProductContainer = styled.div`
  position: relative;
  .prod {
    height: 100px;
    .prod-total {
      width: 100%;
      td {
        padding: 0px;
      }
    }
  }
`;

export const Discount = styled.div`
  label {
    display: flex;
    gap: 10px;
  }
  padding-bottom: 25px;
`;

export const PaymentMethodContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, auto);
  position: relative;
  top: -18%;
  .btn-apply {
    cursor: pointer;
    height: 40px;
    width: 290px;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
  }
  .discountCode {
    height: 40px;
    width: 290px;
  }
`;

export const Total = styled.div`
  .cart-total {
    position: relative;
    top: -30%;
    width: 100%;
    td {
      padding: 5px;
    }
  }
`;
