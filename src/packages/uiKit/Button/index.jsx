import React from "react";
import { StyledContainer, StyledIcon } from "./styles";

export const Button = (props) => {
  const { children, icon, onClick } = props;

  return (
    <StyledContainer onClick={onClick}>
      <StyledIcon src={icon} alt="button icon" />
      {children}
    </StyledContainer>
  );
};
