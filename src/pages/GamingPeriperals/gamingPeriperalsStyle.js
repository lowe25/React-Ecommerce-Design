import styled from "styled-components";
import { Link } from "react-router-dom";
import { DeviceSize } from "mediaQuerie/mediaQueries";

export const Links = styled(Link)`
  text-decoration: none;
`;
export const PeriperalsContainer = styled.div`
  min-height: 500px;
`;
export const Periperals = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, auto);
  gap: 25px;
  padding: 20px;
  /*Mobile*/
  @media (max-width: ${DeviceSize["mobile-md"]}) {
    grid-template-columns: repeat(1, auto);
  }
  @media (min-width: ${DeviceSize["mobile-lg"]}) and (max-width: ${DeviceSize[
      "tablet-xsm"
    ]}) {
    grid-template-columns: repeat(1, auto);
  }

  /*Tablet*/
  @media (min-width: ${DeviceSize["tablet-sm"]}) and (max-width: ${DeviceSize[
      "tablet-md"
    ]}) {
    grid-template-columns: repeat(2, auto);
  }

  /*Large Screens*/
  @media (min-width: ${DeviceSize["tablet-lg"]}) and (max-width: ${DeviceSize[
      "screen-xxl"
    ]}) {
    grid-template-columns: repeat(3, auto);
  }

  @media (min-width: ${DeviceSize["tablet-lg1"]}) and (max-width: ${DeviceSize[
      "screen-lg"
    ]}) {
    grid-template-columns: repeat(2, auto);
  }
`;

export const PeriperalsBox = styled.div`
  min-height: 350px;
  width: 400px;
  border: 1px solid black;
  padding: 15px;

  /*Mobile*/
  @media (max-width: ${DeviceSize["mobile-md"]}) {
    width: 350px;
  }

  /*Tablet*/
  @media (min-width: ${DeviceSize["tablet-sm"]}) and (max-width: ${DeviceSize[
      "tablet-md"
    ]}) {
        width: 350px;
  }
`;

export const PeriperalsImage = styled.div`
  display: grid;
  justify-content: center;
  .perip-img {
    height: 180px;
  }
`;
export const PeriperalsInfo = styled.div`
  font-family: "Rubik", Arial, Helvetica, sans-serif;
  text-align: center;
  padding: 20px;
  ul {
    list-style: none;
  }
  li {
    padding: 5px;
  }
`;

export const PeriperalsButton = styled.div`
  display: grid;
  justify-content: center;
  gap: 10px;
  .btn-cart,
  .btn-prod {
    font-family: "Rubik", Arial, Helvetica, sans-serif;
    height: 30px;
    width: 120px;
    cursor: pointer;
  }
`;
