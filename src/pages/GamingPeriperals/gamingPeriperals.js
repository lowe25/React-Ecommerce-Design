import {
  PeriperalsContainer,
  Periperals,
  PeriperalsBox,
  PeriperalsImage,
  PeriperalsInfo,
  PeriperalsButton,
  Links,
} from "./gamingPeriperalsStyle";

import { periperals } from "pages/StoreData/periperals";
function gamingPeriperals() {
  return (
    <PeriperalsContainer>
      <Periperals>
        {periperals.map((item, index) => {
          return (
            <PeriperalsBox>
              <PeriperalsImage>
                <img
                  src={item.prodImg}
                  alt="Periperals Image1"
                  className="perip-img"
                ></img>
              </PeriperalsImage>
              <PeriperalsInfo>
                <ul>
                  <li>{item.prodName}</li>
                  <li>{item.prodPrice}</li>
                </ul>
              </PeriperalsInfo>
              <PeriperalsButton>
                <Links to={item.link}>
                  <input
                    type="button"
                    value="View Product"
                    className="btn-prod"
                  ></input>
                </Links>
                <input
                  type="button"
                  value="Add To Cart"
                  className="btn-cart"
                ></input>
              </PeriperalsButton>
            </PeriperalsBox>
          );
        })}
      </Periperals>
    </PeriperalsContainer>
  );
}

export default gamingPeriperals;
