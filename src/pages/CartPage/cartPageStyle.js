import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)`
  text-decoration: none;
`;
export const CartContainer = styled.div`
  min-height: 632px;
`;
export const CartProd = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 20px;
`;
export const CartOrder = styled.div`
  display: grid;
  gap: 10px;
`;
export const CartItem = styled.div`
  min-height: 170px;
  padding: 25px;
  border: 1px solid black;
  .cart-tbl {
    width: 100%;
  }
  td,
  th {
    border: none;
    text-align: center;
    width: 100px;
  }
  .cart-img {
    height: 100px;
    width: 120px;
  }
  .cbo-quantity {
    width: 100px;
    text-align: center;
  }
`;
export const CartTotal = styled.div`
  height: 170px;
  width: 400px;
  border: 1px solid black;
  padding: 20px;
  display: grid;
  justify-content: center;
  p {
    position: relative;
    left: 5px;
  }
  .cart-total {
    width: 100%;
    td {
      padding: 5px;
    }
  }
`;
export const CartButtons = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  gap: 20px;
  .btn-checkout,
  .btn-shopping {
    height: 30px;
    width: 120px;
    cursor: pointer;
  }
`;
