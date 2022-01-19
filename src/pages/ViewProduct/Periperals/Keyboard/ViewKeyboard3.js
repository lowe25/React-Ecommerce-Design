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
import razerKeyboard from "assets/img/razerKeyboard.png";
function RyzenUnit1() {
  return (
    <ProductDetailsContainer>
      <ProductContainer>
        <ProductPicture>
          <img src={razerKeyboard} alt="Gaming Pc Pic" className="prod-img"></img>
        </ProductPicture>
        <ProductOrder>
          <label>
            <p>Razer Blackwidow V3</p>
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
            <td>Switch Type:</td>
            <td>Blue Switches</td>
          </tr>

          <tr>
            <td>Size:</td>
            <td>Full Size</td>
          </tr>

          <tr>
            <td>Connectivity:</td>
            <td>Wired - USB-C</td>
          </tr>

          <tr>
            <td>Weight:</td>
            <td>810g</td>
          </tr>

          <tr>
            <td>Compability:</td>
            <td>Devices with USB Connector</td>
          </tr>
          <tr>
            <td>Onboard Memomry:</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Media Keys:</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Wrist Rest:</td>
            <td>Yes</td>
          </tr>
          <tr>
            <td>Cable:</td>
            <td>1.8m Braided Cable</td>
          </tr>
          <tr>
            <td>Lighting:</td>
            <td>6 Colors Profiles</td>
          </tr>
        </table>
      </ProductInfo>
    </ProductDetailsContainer>
  );
}
export default RyzenUnit1;
