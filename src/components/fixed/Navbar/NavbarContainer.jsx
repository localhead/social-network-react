import React from "react";
import { connect } from "react-redux";
import { NavBarLinks } from "./Links/NavBarLinks";

class NavbarContainer extends React.Component {
  render() {
    //console.log("asdads", this.props.isProfileIdIsAuthUserId);
    return <NavBarLinks {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    navigationLinks: state.sidebarData.navigationLinks,
    isProfileIdIsAuthUserId: state.profilePage.isProfileIdIsAuthUserId,
  };
};

export default connect(mapStateToProps)(NavbarContainer);
