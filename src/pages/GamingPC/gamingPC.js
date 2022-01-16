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
  ButtonContainer,
  Links
} from "./gamingPCstyle";

//Product List
import { gamingPCs } from "pages/StoreData/gamingPc";

function gamingPC() {
  return (
    <GamingContainer>
      <GamingpcList>
        {gamingPCs.map((item, index) => {
          const cpu = item.tag;
          if(cpu === "ryzen"){
            return (
            <GamingpcBox>
              <ImageContainer>
                <img
                  src={item.imgSrc}
                  alt="Ryzen Gaming Builds"
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
                <Links to="/viewProduct">
                <input type="button" value="View Product" className="btn-prod"></input>
                </Links>
              </ButtonContainer>
            </GamingpcBox>
          );
          }else{
            return (
            <GamingpcBox>
              <ImageContainer>
                <img
                  src={item.imgSrc}
                  alt="Intel Gaming Build"
                  className="intelUnits"
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
                <Links to="/viewProduct1">
                <input type="button" value="View Product" className="btn-prod"></input>
                </Links>
              </ButtonContainer>
            </GamingpcBox>
          );
          }
        })}
      </GamingpcList>
    </GamingContainer>
  );
}

export default gamingPC;
