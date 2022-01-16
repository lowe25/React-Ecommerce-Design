import { NavContainer } from "./navbarStyle";
import { NavLogo } from "./navbarStyle";
import { NavMenu } from "./navbarStyle";
import { NavList } from "./navbarStyle";
import { NavLinks } from "./navbarStyle";
import { NavMiddle } from "./navbarStyle";
import { NavRight } from "./navbarStyle";
import React, { useState } from "react";
function Navbar() {
  const [mobile, setMobile] = useState(false);
  return (
    <NavContainer>
     <NavLinks to="/">
     <NavLogo>LA Gaming Rigs</NavLogo>
     </NavLinks>
      <NavMiddle>
        <NavMenu>
          <NavLinks to="/gamingpc">
            <NavList>Gaming PC</NavList>
          </NavLinks>
          <NavLinks to="/gaminglaptop">
            <NavList>Gaming Laptop</NavList>
          </NavLinks>

          <NavLinks to="/gamingPerip">
            <NavList>Gaming Periperals</NavList>
          </NavLinks>

          <NavLinks to="/">
            <NavList>Make My Own</NavList>
          </NavLinks>
        </NavMenu>
      </NavMiddle>

      <NavRight>
        <NavMenu>
          <NavLinks to="/myAccount">
            <NavList>My Account</NavList>
          </NavLinks>
          <NavLinks to="/cartpage">
            <NavList>Cart</NavList>
          </NavLinks>
        </NavMenu>
      </NavRight>

    </NavContainer>
  );
}

export default Navbar;
