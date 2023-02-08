import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfileDataThunk } from "redux/profile-reducer";

// This import from router dom allows us to get data from browser URL
import { useLocation, useNavigate, useParams } from "react-router-dom";

import { withAuthRedirect } from "highOrderComponents/withAuthRedirect";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile() {
    //console.log(this.props.router.params.id);
    let userId = this.props.router.params.id;
    this.props.getProfileDataThunk(userId ? userId : 2);
  }

  //console.log(state.authDa ta.isAuthorized);

  render() {
    //console.log(isAuthorized);
    return (
      <>
        <Profile props={this.props} />
      </>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

// with compose:

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
