import {
  FooterContainer,
  FooterListContainer,
  FooterList,
  FooterListSocial,
  ListValues,
  EmailDiv,
} from "./footerStyle";
function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterListContainer>
          <FooterList>
          <h1>Gaming PC</h1>
            <ListValues>All Builds</ListValues>
            <ListValues>Intel Builds</ListValues>
            <ListValues>Ryzen Builds</ListValues>
            <ListValues>Make My Own</ListValues>
          </FooterList>

          <FooterList>
          <h1>Gaming Laptop</h1>
            <ListValues>Asus</ListValues>
            <ListValues>Acer</ListValues>
            <ListValues>Alienware</ListValues>
            <ListValues>MSI</ListValues>
          </FooterList>

          <FooterList>
          <h1>Periperals</h1>
            <ListValues>HypexX</ListValues>
            <ListValues>Logitech</ListValues>
            <ListValues>Razer</ListValues>
            <ListValues>SteelSeries</ListValues>
          </FooterList>

          <FooterList>
          <h1>Support</h1>
            <ListValues>Return Policy</ListValues>
            <ListValues>Customer Support</ListValues>
            <ListValues>Service Center</ListValues>
            <ListValues>Warranty</ListValues>
          </FooterList>

          <FooterList>
          <h1>Company</h1>
            <ListValues>About</ListValues>
            <ListValues>Customer Support</ListValues>
            <ListValues>Service Center</ListValues>
            <ListValues>Warranty</ListValues>
          </FooterList>

          <EmailDiv>
            <FooterListSocial>
              <ListValues>Facebook</ListValues>
              <ListValues>Instagram</ListValues>
              <ListValues>Twitter</ListValues>
              <ListValues>Youtube</ListValues>
            </FooterListSocial>
            <p>Recieve our Newsletter</p>
            <input type="text" placeholder="Email"></input>
            <input type="submit" value="Submit"></input>
          </EmailDiv>
        </FooterListContainer>
      </FooterContainer>
    </>
  );
}
export default Footer;
