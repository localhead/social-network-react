import { Header } from "./Header";
import React from "react";
import { connect } from "react-redux";
import { authUserData, getAuthUserThunk } from "redux/auth-reducer";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.props.getAuthUserThunk();
  }

  render() {
    return <Header {...this.props.props} />;
  }
}

// Container + Class in one file. All in one
let mapStateToProps = (state) => {
  return {
    props: state.authData,
  };
};

export default connect(mapStateToProps, { authUserData, getAuthUserThunk })(
  HeaderContainer
);
