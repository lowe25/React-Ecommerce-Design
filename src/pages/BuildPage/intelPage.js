import { ProductContainer, ProductBuilds, ProductBox, ButtonContainer, Links } from "./buildStyle";
import { intelSpecs } from "pages/StoreData/intelBuilds";
import intelPc from "assets/img/intelGaming-pc.jpg";

function intelPage() {
  return (
    <>
      <ProductContainer>
        <ProductBuilds>
          {intelSpecs.map((item, index) => {
            return (
              <ProductBox>
                 <div className="prodImg-con">
                 <img
                  src={intelPc}
                  className="prod-img"
                  alt="Intel Gaming Pc"
                ></img>
                 </div>
                <div className="prod-details">
                  <p>{item.buildImg}</p>
                  <p>{item.cpu}</p>
                  <p>{item.gpu}</p>
                  <p>{item.ram}</p>
                </div>
                <ButtonContainer>
                <Links to={item.link}>
                <input type="button" value="View Product" className="btn-prod"></input>
                </Links>
                  <input type="button" value="Add To Cart" className="btn-addCart"></input>
                </ButtonContainer>
              </ProductBox>
            );
          })}
        </ProductBuilds>
      </ProductContainer>
    </>
  );
}
export default intelPage;
