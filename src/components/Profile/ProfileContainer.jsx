import React from "react";
import { Profile } from "./Profile";
import { connect } from "react-redux";
import { getProfileDataThunk } from "redux/profile-reducer";

// This import from router dom allows us to get data from browser URL
import { useLocation, useNavigate, useParams } from "react-router-dom";

export class ProfileContainer extends React.Component {
  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile() {
    //console.log(this.props.router.params.id);
    let userId = this.props.router.params.id;
    this.props.getProfileDataThunk(userId ? userId : 2);
  }

  render() {
    return <Profile props={this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

// This function will provide us with some extra info about URL. We will be able to get userID from it
// and then insert it after
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

export const ProfileConnecter = connect(mapStateToProps, {
  getProfileDataThunk,
})(withRouter(ProfileContainer));

/* let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfileAC: (data) => {

      dispatch(setUserProfile(data));
    },
  };
}; */
