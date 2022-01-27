import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  min-height: 631.5px;
`;
export const ProductContainer = styled.div`
    font-family: 'Rubik', Arial, Helvetica, sans-serif;

  height: 450px;
  display: grid;
  grid-template-columns: repeat(2, auto);
  justify-content: center;
  gap: 70px;
`;
export const ProductPicture = styled.div`
  padding: 30px;
  .prod-img {
    height: 350px;
  }
`;

export const ProductOrder = styled.div`
  position: relative;
  top: 10%;
  margin: 10px;
  label {
    padding: 7px;
  }
`;

export const ColorContainer = styled.div`
  display: flex;
  gap: 10px;
  .color1,
  .color2 {
    border-radius: 20px;
    border: 1px solid black;
    cursor: pointer;
    height: 30px;
    width: 40px;
  }
  .color2 {
    background-color: black;
  }
`;

export const QuantityContainer = styled.div`
  .quantityTxt {
    height: 26px;
    text-align: center;
  }
  .minusBtn,
  .addBtn {
    height: 26px;
    width: 35px;
    cursor: pointer;
  }
`;

//Add to cart/Checkout button container
export const ProductButtons = styled.div`
  padding-top: 15px;
  display: grid;
  grid-template-columns: repeat(1, auto);
  gap: 15px;
  .btn-addCart,
  .btn-checkout {
    height: 30px;
    cursor: pointer;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;

  }
`;

//Table
export const ProductInfo = styled.div`
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  display: flex;
  justift-content: center;
  padding: 10px;
  .product-specs {
    display: grid;
    justify-content: center;
    border-collapse: collapse;
    width: 100%;
  }
  td,
  th {
    border-bottom: 1px solid black;
    padding: 8px;
    text-align: left;
    width: 500px;
    font-weight: normal;
  }
`;
