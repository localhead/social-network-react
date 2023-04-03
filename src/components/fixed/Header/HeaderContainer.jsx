import { Header } from "./Header";
import React from "react";
import { connect } from "react-redux";
import { authUserData, getAuthUserThunk, logoutUser } from "redux/auth-reducer";
import { headerGetAuthDataReSelector } from "redux/selector";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserThunk();
    console.log("header render");
    console.log(this.props.state);
  }

  render() {
    return (
      <Header {...this.props.authData} logoutUser={this.props.logoutUser} />
    );
  }
}

// Container + Class in one file. All in one
let mapStateToProps = (state) => {
  return {
    authData: headerGetAuthDataReSelector(state),
    logoutUser: logoutUser,
    state: state.appData,
  };
};

export default connect(mapStateToProps, {
  authUserData,
  getAuthUserThunk,
  logoutUser,
})(HeaderContainer);
