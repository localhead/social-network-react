import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import {
  getProfileDataThunk,
  getUserStatusThunk,
  setAuthUserStatusThunk,
} from "redux/profile-reducer";

// This import from router dom allows us to get data from browser URL
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { withAuthRedirect } from "components/highOrder/withAuthRedirect";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getUserStatus();
    this.getUserProfile();
    //console.log(this.props);
  }

  getUserProfile() {
    let authUserId = this.props.state.authData.id;
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
    let authUserId = this.props.props.authData.id;
    let userId = Number(this.props.router.params.id);

    this.props.getUserStatusThunk(
      userId ? userId : authUserId ? authUserId : 2
    );
  }

  //console.log(state.authData.isAuthorized);

  render() {
    //console.log(this.props.props.profilePage);
    return (
      <>
        <Profile
          {...this.props.state}
          getUserStatus={this.getUserStatus.bind(this)}
          setUserStatus={this.setAuthUserStatus.bind(this)}
        />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    state,
  };
};

// with compose: ----------

// without compose:
// This function will provide us with some extra info about URL. We will be able to get userID from it
// and then insert it after with props.
// Check video 60 comment section to know more.
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

export const ProfileConnecter = connect(mapStateToProps, {
  getProfileDataThunk,
  getUserStatusThunk,
  setAuthUserStatusThunk,
})(withRouter(AuthRedirectContainer));
/* 



*/
// Another way of writing mapDispatchToProps
/* let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfileAC: (data) => {

      dispatch(setUserProfile(data));
    },
  };
}; */
