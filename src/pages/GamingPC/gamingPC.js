//PC Images
import ryzenPc from "assets/img/ryzenGaming-pc.jpg";
import intelPc from "assets/img/intelGaming-pc.jpg";
//Page CSS
import {
  GamingContainer,
  GamingpcList,
  GamingpcBox,
  ImageContainer,
  GamingpcSpecs,
  ButtonContainer
} from "./gamingPCstyle";

//Product List
import { gamingPCs } from "pages/StoreData/gamingPc";

function gamingPC() {
  return (
    <GamingContainer>
      <GamingpcList>
        {gamingPCs.map((item, index) => {
          return (
            <GamingpcBox>
              <ImageContainer>
                <img
                  src={item.imgSrc}
                  alt="Featured Gaming Build"
                  className="ryzenUnits"
                />
              </ImageContainer>
              <GamingpcSpecs>
               <ul>
                 <li>{item.cpu}</li>
                 <li>{item.ram}</li>
                 <li>{item.gpu}</li>
               </ul>
              </GamingpcSpecs>
              <ButtonContainer>
                <input type="button" value="Add to Cart" className="btn-cart"></input>
                <input type="button" value="View Product" className="btn-prod"></input>
              </ButtonContainer>
            </GamingpcBox>
          );
        })}
      </GamingpcList>
    </GamingContainer>
  );
}

export default gamingPC;
