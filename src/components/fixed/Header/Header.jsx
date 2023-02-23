import React from "react";
import logo from "../../../assets/img/logo.png";

import { StyledButton, StyledHeader, StyledLogo } from "./StyledHeader";

export const Header = function (props) {
  const LogoutHandler = () => {
    props.logoutUser();
  };

  return (
    <StyledHeader>
      <StyledLogo src={logo} alt="logo" />
      {props.login ? (
        <>
          <div>{props.login}</div>
          <StyledButton onClick={LogoutHandler}>выйти</StyledButton>
        </>
      ) : (
        <StyledButton>выйти</StyledButton>
      )}
    </StyledHeader>
  );
};
