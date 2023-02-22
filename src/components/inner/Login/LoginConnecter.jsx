import React from "react";
import { connect } from "react-redux";
import { loginUser } from "redux/auth-reducer";
import { Login } from "./Login";

export class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

export const LoginConnecter = connect(mapStateToProps, {
  loginUser,
})(LoginContainer);
