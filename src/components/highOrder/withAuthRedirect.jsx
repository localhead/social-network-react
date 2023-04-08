import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";

let mapStateToPropsForRedirect = (state) => {
  return {
    props: state,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      const isAuthorized = this.props.props.authData.isAuthorized;
      if (!isAuthorized) return <Navigate to="/login" />;
      return <Component {...this.props} />;
    }
  }

  // this does not have much sense cuz we have an access to "authData.isAuthorized" here.
  // but if we need we still can manually connect our state to our component
  let ConnectedWithRedirectComponent = connect(mapStateToPropsForRedirect)(
    RedirectComponent
  );

  return ConnectedWithRedirectComponent;
};
