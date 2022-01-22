import {
  Links,
  CheckoutContainer,
  CheckoutMain,
  ContactInfo,
  PersonInfo,
  ButtonContainer,
  PaymentMethodContainer,
  ProductContainer,
  Discount,
  Total,
} from "./checkoutPageStyle.";
import intelPc from "assets/img/intelGaming-pc.jpg";
import { CartProduct } from "pages/Payment/PaymentStyle";
function CheckoutPage() {
  return (
    <CheckoutContainer>
      <CheckoutMain>
        {/**1st Column */}
        <ContactInfo>
          <label>Contact Information</label>
          <PersonInfo>
            <label className="person-info">
              <input
                type="text"
                placeholder="FirstName"
                className="txtFname"
              ></input>
            </label>

            <label className="person-info">
              <input
                type="text"
                placeholder="LastName"
                className="txtLname"
              ></input>
            </label>
          </PersonInfo>
          <label>Shipping Address:</label>

          <label>
            <input
              type="text"
              placeholder="Contact Number"
              className="txtNum"
            ></input>
          </label>
          <label>
            <input type="text" placeholder="Address" className="txtAdd"></input>
          </label>
          <label>
            <input
              type="text"
              placeholder="Apartment, Suite, etc."
              className="txtApt"
            ></input>
          </label>
          <label>
            <input type="text" placeholder="City" className="txtCity"></input>
          </label>

          <ButtonContainer>
          <Links to="/gamingpc">
          <input
              type="button"
              value="Return to Cart"
              className="btn-cart"
            ></input>
          </Links>
       
            <Links to="/payment">
            <input
              type="button"
              value="Continue to Payment"
              className="btn-checkout"
            ></input>
            </Links>
          </ButtonContainer>
        </ContactInfo>

        {/**2nd Column */}
        <PaymentMethodContainer>
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
        </PaymentMethodContainer>
      </CheckoutMain>
    </CheckoutContainer>
  );
}
export default CheckoutPage;
