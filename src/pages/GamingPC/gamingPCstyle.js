import styled from "styled-components";
import {Link} from "react-router-dom";
//PC Images
import ryzenImage from "assets/img/ryzen-cpu.jpg";
import intelImage from "assets/img/intel-cpu.jpg";
export const GamingContainer = styled.div`
  h1 {
    color: #ffffff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin: 0;
    text-align: center;
    font-family: 'Open Sans', sans-serif;
  }
`;

export const StyleRyzenBuild = styled.div`
  position: relative;
  height: 500px;
  background: url(${ryzenImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const StyleIntelBuilds = styled.div`
  position: relative;
  height: 500px;
  background: url(${intelImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Links = styled(Link)`
text-decoration:none;
`

export const StyleButtonDiv = styled.div`
  display: grid;
  justify-content: center;
  position: relative;
  top: 60%;
  .btn-build {
    cursor: pointer;
    height: 40px;
    width: 200px;
    border:none;
    font-family: 'Open Sans', sans-serif;
  }
`;


