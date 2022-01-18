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
  import dellLaptop from "assets/img/dellLaptop.jpg";
  
  function ViewLaptop() {
    return (
      <ProductDetailsContainer>
        <ProductContainer>
          <ProductPicture>
            <img src={dellLaptop} alt="Gaming Pc Pic" className="prod-img"></img>
          </ProductPicture>
          <ProductOrder>
            <label>
              <p>Dell Alienware x17 R1</p>
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
              <input
                type="text"
                value="0"
                className="quantityTxt"
                disabled
              ></input>
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
              <td>Intel® Core™ I7-11800H
</td>
            </tr>
  
            <tr>
              <td>RAM:</td>
              <td>16GB DDR4 3200Mhz</td>
            </tr>
  
            <tr>
              <td>Storage:</td>
              <td>1TB PCIe SSD</td>
            </tr>
  
            <tr>
              <td>GPU:</td>
              <td>NVIDIA® GeForce RTX™ 3070 8GB GDDR6</td>
            </tr>
  
            <tr>
              <td>Operating System:</td>
              <td>Windows 10</td>
            </tr>
            <tr>
              <td>Camera:</td>
              <td>720P HD camera</td>
            </tr>
            <tr>
              <td>Port:</td>
              <td>1x 3.5mm Combo Audio Jack, 1x HDMI 2.0, 1x USB 2.0 Type-A</td>
            </tr>
            <tr>
              <td>Wifi:</td>
              <td>Wi-Fi 5 (802.11ac)+Bluetooth 5.0 (Dual band) 2*2;(*BT version may change with OS upgrades.)</td>
            </tr>
            <tr>
              <td>Battery:</td>
              <td>48WHrs, 3S1P, 3-cell Li-ion</td>
            </tr>
            <tr>
              <td>Weight:</td>
              <td>2.20 Kg (4.85 lbs)</td>
            </tr>
          </table>
        </ProductInfo>
      </ProductDetailsContainer>
    );
  }
  export default ViewLaptop;
  