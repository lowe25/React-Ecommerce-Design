import styled from "styled-components";

export const GamingContainer = styled.div`
  min-height: 664px;
  padding: 20px;
`;

export const GamingpcList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 30px;
`;

export const GamingpcBox = styled.div`
  min-height: 420px;
  width: 350px;
  border: 1px solid black;
  padding: 15px;
`;

export const ImageContainer = styled.div`
  display: grid;
  justify-content: center;
  .ryzenUnits {
    height: 230px;
  }
`;

export const GamingpcSpecs = styled.div`
  text-align: center;
  padding: 20px;
  ul {
    display:grid;
    justify-content:center;
    gap:8px;
    list-style: none;
    margin: 0 auto;
    text-align: center;
  }
`;

export const ButtonContainer = styled.div`
display:grid;
justify-content:center;
gap:10px;
.btn-cart,
.btn-prod{
  height:30px;
  width:110px;
  cursor:pointer;
}
`
