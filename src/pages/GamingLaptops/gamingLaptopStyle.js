import styled from "styled-components";
import {Link} from "react-router-dom";
import { DeviceSize } from "mediaQuerie/mediaQueries";

export const GamingLaptopContainer = styled.div`
  min-height: 500px;
  padding: 20px;
`;
export const Links = styled(Link)`
text-decoration:none;
`
export const LaptopList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 30px;
  @media(max-width:${DeviceSize["tablet-xsm"]}){
    grid-template-columns: repeat(1, auto);
  }
  @media(min-width:${DeviceSize["tablet-sm"]}) and  (max-width:${DeviceSize["tablet-md"]}){
    grid-template-columns: repeat(2, auto);
  }

  @media(min-width:${DeviceSize["tablet-lg"]}) and  (max-width:${DeviceSize["screen-lg"]}){
    grid-template-columns: repeat(2, auto);
  }
`;
export const LaptopBox = styled.div`
  border: 1px solid black;
  min-height: 470px;
  width: 380px;
  padding: 10px;
`;

export const GamingLaptopImage = styled.div`
  display: grid;
  justify-content: center;
  .prod-img {
    height: 200px;
  }
`;

export const LaptopSpecs = styled.div`
  font-family: 'Rubik', Arial, Helvetica, sans-serif;

  ul {
    list-style: none;
    display: grid;
    justify-content: center;
  }
  li {
    padding: 10px;
  }
`;

export const ButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  gap: 10px;
  padding: 15px;
  .btn-addCart,
  .btn-viewProd {
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    height: 30px;
    width: 120px;
    cursor:pointer;
  }
`;
