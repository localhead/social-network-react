import React from "react";
import { connect } from "react-redux";
import { NavBarLinks } from "./Links/NavBarLinks";

class NavbarContainer extends React.Component {
  render() {
    return <NavBarLinks {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    navigationLinks: state.sidebarData.navigationLinks,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
