import {
  ProductDetailsContainer,
  ProductContainer,
  ProductPicture,
  ProductOrder,
  QuantityContainer,
  ProductButtons,
  ProductInfo,
  ColorContainer,
} from "../../ViewProductStyle";
import logitechMouse from "assets/img/logitechMouse.jpg";
function RyzenUnit1() {
  return (
    <ProductDetailsContainer>
      <ProductContainer>
        <ProductPicture>
          <img src={logitechMouse} alt="Gaming Pc Pic" className="prod-img"></img>
        </ProductPicture>
        <ProductOrder>
          <label>
            <p>Logitech G Pro</p>
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
            <td>Connectivity:</td>
            <td>Wired - Standard Cable</td>
          </tr>

          <tr>
            <td>Sensor:</td>
            <td>Optical</td>
          </tr>

          <tr>
            <td>Max Sensitivity (DPI):</td>
            <td>6400</td>
          </tr>

          <tr>
            <td>Cable:</td>
            <td>2.1 m / 6.89 ft</td>
          </tr>

          <tr>
            <td>Battery Life:</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Switch Lifecycle:</td>
            <td>10 Million Clicks</td>
          </tr>
          <tr>
            <td>Grip Style:</td>
            <td>Palm and Claw</td>
          </tr>
          <tr>
            <td>Color:</td>
            <td>Black</td>
          </tr>
        </table>
      </ProductInfo>
    </ProductDetailsContainer>
  );
}
export default RyzenUnit1;
