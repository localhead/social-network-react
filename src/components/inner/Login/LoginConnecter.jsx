import React from "react";
import { connect } from "react-redux";
import { Login } from "./Login";

export class LoginContainer extends React.Component {
  render() {
    return <Login {...this.props.state} />;
  }
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

export const LoginConnecter = connect(mapStateToProps, {})(LoginContainer);
