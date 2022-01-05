import { ProductContainer, ProductBuilds, ProductBox, ButtonContainer } from "./buildStyle";
import { ryzenSpecs } from "pages/StoreData/ryzenbuild";
import ryzenPc from "assets/img/ryzenGaming-pc.jpg";
function ryzenPage() {
  return (
    <>
      <ProductContainer>
         <ProductBuilds>
         {ryzenSpecs.map((item, index) => {
            return (
              <ProductBox>
                 <div className="prodImg-con">
                 <img
                  src={ryzenPc}
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
                  <input type="button" value="View Product" className="btn-prod"></input>
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

export default ryzenPage;
