import styled from "styled-components";
import { DeviceSize } from "mediaQuerie/mediaQueries";
//React Router
import { Link } from "react-router-dom";
//Assets Images
import landingImage from "assets/img/welcome-landing.jpg";

//Router
export const Links = styled(Link)`
  text-decoration: none;
`;
export const LandingContainer = styled.div`

  h1 {
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    font-family: 'Open Sans', sans-serif;

  }
`;
export const StyleLanding = styled.div`
  position: relative;
  height: 500px;
  background: url(${landingImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const BuildContainer = styled.div``;
export const BuildList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 20px;
  padding: 20px;

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

export const BuildBox = styled.div`
  min-height: 330px;
  width: 350px;
  border: 1px solid black;
  padding:10px;
`;
export const BuildImage = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 15px;
  .ryzen-img,
  .intel-img {
    height: 180px;
  }
`;

export const BuildSpecs = styled.div`
  padding: 12px;
  font-family: 'Rubik', Arial, Helvetica, sans-serif;
  ul {
    display: grid;
    justify-content: center;
    gap: 8px;
    list-style: none;
    margin: 0 auto;
    text-align: center;
  }
`;

export const StyleButtonDiv = styled.div`
  display: grid;
  justify-content: center;
  gap:10px;
  .btn-build,
  .btn-cart {
    cursor: pointer;
    height: 30px;
    width: 100px;
    font-family: 'Rubik', Arial, Helvetica, sans-serif;
    font-weight:bold;
  }
`;
