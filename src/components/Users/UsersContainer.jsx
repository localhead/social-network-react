import { connect } from "react-redux";
import {
  followUserAction,
  setCurrentPageAction,
  setTotalCountUsers,
  setUsersAction,
  unfollowUserAction,
} from "redux/users-reducer";

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
      dispatch(setUsersAction(users));
    },
    setPage: (page) => {
      dispatch(setCurrentPageAction(page));
    },
    setCount: (count) => {
      dispatch(setTotalCountUsers(count));
    },
  };
};

export const UsersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersClass);
