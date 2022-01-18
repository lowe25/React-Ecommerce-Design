import styled from "styled-components";
import {Link} from "react-router-dom";

export const Links = styled(Link)`
text-decoration:none;
`
export const ProductContainer = styled.div`
  min-height: 632px;
  padding: 20px;
`;

export const ProductBuilds = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  gap: 30px;
`;

export const ProductBox = styled.div`
  height: 420px;
  width: 350px;
  border: 1px solid black;
  padding:15px;
  .prodImg-con{
      display:grid;
      justify-content:center;
  }
  .prod-img {
    height: 200px;
  }

  .prod-details{
      text-align:center;
      padding:20px;
  }
`;

export const ButtonContainer= styled.div`
display:grid;
justify-content:center;
gap:15px;

.btn-prod,
.btn-addCart{
  height:30px;
  width:120px;
  cursor:pointer;
}
`
