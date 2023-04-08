import React from "react";
import { StyledContainer, StyledIcon } from "./styles";

export const ButtonOutlined = (props) => {
  const { children, icon, onClick } = props;

  return (
    <StyledContainer onClick={onClick}>
      {icon && <StyledIcon src={icon} alt="button icon" />}
      {children}
    </StyledContainer>
  );
};
