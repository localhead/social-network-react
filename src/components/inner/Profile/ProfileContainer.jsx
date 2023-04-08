import React from "react";

import { connect } from "react-redux";
import {
  getProfileDataThunk,
  getUserStatusThunk,
  setAuthUserStatusThunk,
} from "redux/profile-reducer";

// This import from router dom allows us to get data from browser URL
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { withAuthRedirect } from "components/highOrder/withAuthRedirect";
import { ProfileInfo } from "./ProfileInfo/ProfileInfo";

class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getUserStatus();
    this.getUserProfile();
  }

  getUserProfile() {
    let authUserId = this.props.authData.id;
    let userId = Number(this.props.router.params.id);

    this.props.getProfileDataThunk(
      userId ? userId : authUserId ? authUserId : 2
    );
  }

  setAuthUserStatus(statusText) {
    this.props.setAuthUserStatusThunk(statusText);
  }

  // this method changes global state
  getUserStatus() {
    let authUserId = this.props.authData.id;
    let userId = Number(this.props.router.params.id);

    this.props.getUserStatusThunk(
      userId ? userId : authUserId ? authUserId : 2
    );
  }

  render() {
    return (
      <>
        <ProfileInfo
          profileData={this.props.profilePage.userProfile}
          profileStatus={this.props.profilePage.userStatus}
          getUserStatus={this.getUserStatus.bind(this)}
          setUserStatus={this.setAuthUserStatus.bind(this)}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    authData: state.authData,
    profilePage: state.profilePage,
  };
};

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  }

  return ComponentWithRouterProp;
}

// HOC for redirection. Container for Container. HOC is a thing which takes NODEs and returns Other Node
let AuthRedirectContainer = withAuthRedirect(ProfileContainer);

export default connect(mapStateToProps, {
  getProfileDataThunk,
  getUserStatusThunk,
  setAuthUserStatusThunk,
})(withRouter(AuthRedirectContainer));
