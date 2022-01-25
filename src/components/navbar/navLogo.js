import React from "react";
import styled from "styled-components";

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const LogoText = styled.h2`
  font-size: 16px;
  margin: 0;
  margin-left: 4px;
  color: #FFFFFF;
  font-weight: 500;
`;
export function Logo(props) {
  return (
    <LogoWrapper>
      <LogoText>LA Gaming Rigs</LogoText>
    </LogoWrapper>
  );
}
