import styled from "styled-components";
import { Link } from "react-router-dom";

export const Links = styled(Link)`
text-decoration:none;
`
export const PaymentContainer = styled.div`
  min-height: 640px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 150px;
`;

export const Payment = styled.div`
  position:relative;
  top:15%;
`;

export const Card = styled.div`
p{
    padding:20px 0 10px 0;
}
  .card-info {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding-bottom: 10px;
    .card-number,
    .card-name{
      height:40px;
    }
  }
  .card-security {
    display: flex;
    gap: 15px;
    .exp-date,
    .card-code{
        height:40px;
    }
  }
`;

export const BillingAddress = styled.div`
p{
    padding:20px 0 10px 0;
}
  .address-box1,
  .address-box2 {
    height: 40px;
    border-bottom: 1px solid black;
    display: flex;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
display:flex;
justify-content:space-between;
gap:150px;
padding-top:20px;
.btn-return,
.btn-payment{
    height:40px;
    width:230px;
    cursor:pointer;
}
`;

/*2nd Column*/
export const CartProduct = styled.div`
  position:relative;
  top:15%;
  .product-total {
    .product-pic {
      height: 100px;
    }
  }
  .discount {
    display: flex;
    gap: 20px;
    padding-top: 20px;
    .btn-apply {
      height: 40px;
      width: 150px;
      cursor: pointer;
    }
    .txt-discount {
      width: 250px;
    }
  }

  .cart-total {
    padding-top: 20px;
    .tbl-cart {
      position: relative;
      top: -30%;
      width: 100%;
      td {
        padding: 6px;
        border-bottom:1px solid black;
      }
    }
  }
`;
