import {
  ProductDetailsContainer,
  ProductContainer,
  ProductPicture,
  ProductOrder,
  QuantityContainer,
  ProductButtons,
  ProductInfo,
  ColorContainer,
} from "../ViewProductStyle";
import ryzenPc from "assets/img/ryzenGaming-pc.jpg";
function ProductDetails() {
  return (
    <ProductDetailsContainer>
      <ProductContainer>
        <ProductPicture>
          <img src={ryzenPc} alt="Gaming Pc Pic" className="prod-img"></img>
        </ProductPicture>
        <ProductOrder>
          <label>
            <p>Starter PC</p>
          </label>
          <label>
            <p>Price: $1,600</p>
          </label>
          <label>
            <p>Color:</p>
            <ColorContainer>
              <input type="button" className="color1"></input>
              <input type="button" className="color2"></input>
            </ColorContainer>
          </label>
          <label>
            <p>Quantity:</p>
          </label>
          <QuantityContainer>
            <input type="button" value="-" className="minusBtn"></input>
            <input type="text" value="0" className="quantityTxt" disabled></input>
            <input type="button" value="+" className="addBtn"></input>
          </QuantityContainer>
          <ProductButtons>
            <input
              type="button"
              value="Add to Cart"
              className="btn-addCart"
            ></input>
            <input
              type="button"
              value="Checkout"
              className="btn-checkout"
            ></input>
          </ProductButtons>
        </ProductOrder>
      </ProductContainer>
      <ProductInfo>
      <table className="product-specs">
          <tr>
            <td>Processor:</td>
            <td>Ryzen 9 5900X CPU</td>
          </tr>

          <tr>
            <td>Motherboard:</td>
            <td>B450 ATX Motherboard</td>
          </tr>

          <tr>
            <td>RAM:</td>
            <td>Hyperx 16GB (2x8GB) 3200MHz (max speed)</td>
          </tr>

          <tr>
            <td>GPU:</td>
            <td>Nvidia Geforce RTX 3060 8GB</td>
          </tr>

          <tr>
            <td>Storage:</td>
            <td>1TB NVMe M.2 SSD</td>
          </tr>
          <tr>
            <td>Power Supply:</td>
            <td>650W Bronze</td>
          </tr>
          <tr>
            <td>Case:</td>
            <td>NZXT H510</td>
          </tr>
          <tr>
            <td>Operating System:</td>
            <td>Windows 10</td>
          </tr>
        </table>
      </ProductInfo>
    </ProductDetailsContainer>
  );
}
export default ProductDetails;
