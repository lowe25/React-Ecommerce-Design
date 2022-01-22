import {
Links,
  PaymentContainer,
  Payment,
  Card,
  BillingAddress,
  CartProduct,
  ButtonContainer,
} from "./PaymentStyle";
import intelPc from "assets/img/intelGaming-pc.jpg";

function PaymentPage() {
  return (
    <PaymentContainer>
      <Payment>
        <p>Payment:</p>
        <Card>
          <p>Credit Card Information:</p>
          <div className="card-info">
            <input
              type="text"
              placeholder="Card number"
              className="card-number"
            />
            <input type="text" placeholder="Card name" className="card-name" />
          </div>
          <div className="card-security">
            <input
              type="text"
              className="exp-date"
              placeholder="Expiration Date (MM/YY)"
            />
            <input
              type="text"
              className="card-code"
              placeholder="Security Code"
            />
          </div>
        </Card>
        <BillingAddress>
          <p>Billing Address:</p>
          <div className="billing-add">
            <div className="address-box1">
              <input
                type="radio"
                id="address"
                name="add"
                value="same-address"
              />
              <label for="same-address">Same As Shipping Address</label>
            </div>
            <div className="address-box2">
              <input type="radio" id="address" name="add" value="new-address" />
              <label for="new-address">Use Different Shipping Address</label>
            </div>
          </div>
        </BillingAddress>

        <ButtonContainer>
          <Links to="/checkoutpage">
          <input
            type="button"
            value="Return to Shipping"
            className="btn-return"
          ></input>
          </Links>
          <Links to="/">
          <input
            type="button"
            value="Confirm Payment"
            className="btn-payment"
          ></input>
          </Links>
        </ButtonContainer>
      </Payment>

      <CartProduct>
        <table className="product-total">
          <tr>
            <th rowSpan={2}>
              <img src={intelPc} alt="Product" className="product-pic"></img>
            </th>
            <td>Starter PC</td>
          </tr>
          <tr>
            <td>$ 1,600</td>
          </tr>
        </table>
        <div className="discount">
          <input
            type="text"
            className="txt-discount"
            placeholder="Discount Code"
          ></input>
          <input type="button" className="btn-apply" value="Apply"></input>
        </div>
        <div className="cart-total">
          <table className="tbl-cart">
            <tr>
              <td>Subtotal:</td>
              <td>$ 1,600</td>
            </tr>
            <tr>
              <td>Shipping:</td>
              <td>$ 10</td>
            </tr>
            <tr>
              <td>Total:</td>
              <td>$ 1,610</td>
            </tr>
          </table>
        </div>
      </CartProduct>
    </PaymentContainer>
  );
}

export default PaymentPage;
