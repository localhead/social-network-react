import React from "react";
import logo from "../../../assets/img/logo.png";

import { StyledButton, StyledHeader, StyledLogo } from "./StyledHeader";

export const Header = function (props) {
  console.log(props);

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo"></StyledLogo>
      {props.login ? (
        <div>{props.login}</div>
      ) : (
        <StyledButton>войти</StyledButton>
      )}
    </StyledHeader>
  );
};
