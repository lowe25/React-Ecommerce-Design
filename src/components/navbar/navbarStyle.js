//React
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
//
import { NavLinks } from "./navLinks";
import { Logo } from "./navLogo";
import { Accessibility } from "./accesibility";
import { DeviceSize } from "mediaQuerie/mediaQueries";
import { MobileNavLinks } from "./mobileNavLinks";

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 1.5em;
  background-color:#262626;
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: center;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar1(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobileSmall });
  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>
        {!isMobile && <NavLinks />}
      </MiddleSection>
      <RightSection>
        {!isMobile && <Accessibility />}
        {isMobile && <MobileNavLinks/>}
      </RightSection>
    </NavbarContainer>
  );
}
