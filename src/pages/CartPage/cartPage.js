import {
  CartContainer,
  CartProd,
  CartOrder,
  CartTotal,
  CartButtons,
  CartItem,
  Links,
} from "./cartPageStyle";
import intelPc from "assets/img/intelGaming-pc.jpg";

function CartPage() {
  return (
    <CartContainer>
      <CartProd>
        <CartOrder>
          <CartItem>
            <table className="cart-tbl">
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <img src={intelPc} alt="tte" className="cart-img"></img>
                </td>
                <td>Starter PC</td>
                <td>$ 1,600</td>
                <td>
                  <select className="cbo-quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </td>
              </tr>
            </table>
          </CartItem>
          <CartItem>
            <table className="cart-tbl">
              <tr>
                <th></th>
                <th></th>
                <th></th>
                <th></th>
              </tr>
              <tr>
                <td>
                  <img src={intelPc} alt="tte" className="cart-img"></img>
                </td>
                <td>Starter PC</td>
                <td>$ 1,600</td>
                <td>
                  <select className="cbo-quantity">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                  </select>
                </td>
              </tr>
            </table>
          </CartItem>
        </CartOrder>
        <CartTotal>
         <p>Order Summary</p>
          <table className="cart-total">
            <tr>
              <td>Sub Total:</td>
              <td>$ 1,600</td>
            </tr>
            <tr>
              <td>Estimate Total:</td>
              <td>$ 1,600</td>
            </tr>
          </table>
          <CartButtons>
            <Links to="/checkoutpage">
              <input
                type="button"
                value="Checkout"
                className="btn-checkout"
              ></input>
            </Links>
            <Links to="/">
              <input
                type="button"
                value="Continue Shopping"
                className="btn-shopping"
              ></input>
            </Links>
          </CartButtons>
        </CartTotal>
      </CartProd>
    </CartContainer>
  );
}

export default CartPage;
