import {
  GamingLaptopContainer,
  LaptopBox,
  LaptopList,
  GamingLaptopImage,
  LaptopSpecs,
  ButtonContainer,
  Links
} from "./gamingLaptopStyle";

import { gamingLaptopList } from "pages/StoreData/gamingLaptopList";
function gamingLaptop() {
  return (
    <GamingLaptopContainer>
      <LaptopList>
        {gamingLaptopList.map((item, index) => {
          return (
            <LaptopBox>
              <GamingLaptopImage>
                <img
                  src={item.imgLaptop}
                  className="prod-img"
                  alt="Intel Gaming Pc"
                ></img>
              </GamingLaptopImage>
              <LaptopSpecs>
                <ul>
                  <li>{item.name}</li>
                  <li>{item.cpu}</li>
                  <li>{item.ram}</li>
                  <li>{item.storage}</li>
                  <li>{item.gpu}</li>
                  <li>{item.os}</li>
                </ul>
                <ButtonContainer>
                  <input
                    type="button"
                    className="btn-addCart"
                    value="Add to Cart"
                  ></input>
                 <Links to="/viewLaptop">
                 <input
                    type="button"
                    className="btn-viewProd"
                    value="View Product"
                  ></input>
                 </Links>
                </ButtonContainer>
              </LaptopSpecs>
            </LaptopBox>
          );
        })}
      </LaptopList>
    </GamingLaptopContainer>
  );
}
export default gamingLaptop;
