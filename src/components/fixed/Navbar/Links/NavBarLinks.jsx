import { StyledLink, StyledLinksWrapper, StyledList } from "./styles";

import React from "react";

export const NavBarLinks = (props) => {
  const { navigationLinks } = props;

  return (
    <StyledLinksWrapper>
      {navigationLinks.map((item, index) => {
        return (
          <StyledList key={index}>
            <StyledLink to={item.path}>{item.label}</StyledLink>
          </StyledList>
        );
      })}
    </StyledLinksWrapper>
  );
};
