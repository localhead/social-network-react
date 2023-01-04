import { connect } from "react-redux";
import {
  followUserAction,
  setUsersAction,
  unfollowUserAction,
} from "redux/users-reducer";
import { Users } from "./Users";
import { UsersClass } from "./UsersClass";

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    onFollowUser: (userId) => {
      dispatch(followUserAction(userId));
    },
    onUnFollowUser: (userId) => {
      dispatch(unfollowUserAction(userId));
    },
    setUsersData: (users) => {
      console.log(users);
      dispatch(setUsersAction(users));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClass);
