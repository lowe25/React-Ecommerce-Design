import {
  GamingLaptopContainer,
  LaptopBox,
  LaptopList,
  GamingLaptopImage,
  LaptopSpecs,
  ButtonContainer,
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
                  <input
                    type="button"
                    className="btn-viewProd"
                    value="View Product"
                  ></input>
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
