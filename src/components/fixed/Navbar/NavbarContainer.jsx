import { connect } from "react-redux";

import { Navbar } from "./Navbar";

let mapStateToProps = (state) => {
  return {
    friendsData: state.sidebarData.friendsData,
    navigationLinks: state.sidebarData.navigationLinks,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
