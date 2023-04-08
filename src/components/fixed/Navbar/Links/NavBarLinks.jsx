import { StyledLink, StyledLinksWrapper, StyledList } from "./styles";

import React from "react";

export const NavBarLinks = (props) => {
  const navLinks = props.navigationLinks;

  //const authId = props.authData.id;

  //const profileId = props.profilePage.userProfile.userId;

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
