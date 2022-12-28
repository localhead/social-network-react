import { connect } from "react-redux";

import { Navbar } from "./Navbar";

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {};
};

export const NavbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
