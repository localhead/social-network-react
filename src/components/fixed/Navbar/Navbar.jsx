import React from "react";

import { NavBarLinks } from "./Links/NavBarLinks";
import { StyledNavbar } from "./StyledNavbar";
import { FriendsList } from "./FrindsList/FriendsList";

export const Navbar = (props) => {
  const { ...restProps } = props;
  return (
    <StyledNavbar>
      <NavBarLinks {...restProps} />
      <FriendsList {...restProps} />
    </StyledNavbar>
  );
};
