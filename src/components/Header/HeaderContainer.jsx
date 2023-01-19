import { Header } from "./Header";
import React from "react";
import { connect } from "react-redux";
import { authUserData } from "redux/auth-reduser";
import axios from "axios";

class HeaderContainer extends React.Component {
  componentDidMount() {
    this.getAuthData();
  }

  getAuthData() {
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
        withCredentials: true,
      })
      .then((response) => {
        //console.log(response.data.data);
        !this.props.isAuthorized && this.props.authUserData(response.data.data);
      });
  }

  render() {
    return <Header {...this.props} />;
  }
}

// Container + Class in one file. All in one
let mapStateToProps = (state) => {
  return {
    props: state.authData,
  };
};

export default connect(mapStateToProps, { authUserData })(HeaderContainer);
