import {
  StyledLink,
  StyledLinksWrapper,
  StyledList,
} from "./StyledNavBarLinks";

import React from "react";

export const NavBarLinks = (props) => {
  const navLinks = props.navigationLinks;

  return (
    <StyledLinksWrapper>
      {navLinks.map((item, index) => {
        return (
          <StyledList key={index}>
            <StyledLink to={item.path}>{item.label}</StyledLink>
          </StyledList>
        );
      })}
    </StyledLinksWrapper>
  );
};
