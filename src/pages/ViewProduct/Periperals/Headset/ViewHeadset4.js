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
import logitechHeadset from "assets/img/logitechHeadset.png";
function RyzenUnit1() {
  return (
    <ProductDetailsContainer>
      <ProductContainer>
        <ProductPicture>
          <img src={logitechHeadset} alt="Gaming Pc Pic" className="prod-img"></img>
        </ProductPicture>
        <ProductOrder>
          <label>
            <p>Logitech G Pro X</p>
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
            <td>Frequency Response:</td>
            <td>20 Hz – 20 kHz</td>
          </tr>

          <tr>
            <td>Connection Type:</td>
            <td>USB Digital</td>
          </tr>

          <tr>
            <td>Cabral Length:</td>
            <td>6.56 ft / 2.0 m</td>
          </tr>

          <tr>
            <td>Weight:</td>
            <td>0.60 lbs / 275 g</td>
          </tr>

          <tr>
            <td>Compability:</td>
            <td>Devices with USB Connector</td>
          </tr>
          <tr>
            <td>Battery Life:</td>
            <td>None</td>
          </tr>
          <tr>
            <td>Microphone Frequency Response:</td>
            <td>100 Hz – 10 kHz</td>
          </tr>
          <tr>
            <td>Microphone Sensitivity (@1KHZ)</td>
            <td>-42 ± 3 dB</td>
          </tr>
        </table>
      </ProductInfo>
    </ProductDetailsContainer>
  );
}
export default RyzenUnit1;
