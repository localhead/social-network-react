import { connect } from "react-redux";
import { setUserProfile } from "redux/profile-reducer";

import { ProfileClass } from "./ProfileClass";
// This import from router dom allows us to get data from browser URL
import { useLocation, useNavigate, useParams } from "react-router-dom";

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

/* let mapDispatchToProps = (dispatch) => {
  return {
    setUserProfileAC: (data) => {

      dispatch(setUserProfile(data));
    },
  };
}; */

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

export const ProfileContainer = connect(mapStateToProps, { setUserProfile })(
  withRouter(ProfileClass)
);
