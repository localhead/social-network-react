import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { loginUser } from "redux/auth-reducer";
import { Login } from "./Login";

export class LoginContainer extends React.Component {
  render() {
    const isAuthorized = this.props.authData.isAuthorized;

    return (
      <>
        {isAuthorized && <Navigate to="/profile" />}
        <Login {...this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    authData: state.authData,
  };
};

export const LoginConnecter = connect(mapStateToProps, {
  loginUser,
})(LoginContainer);
