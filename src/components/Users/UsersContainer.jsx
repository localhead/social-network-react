import { connect } from "react-redux";
import {
  followUser,
  setCurrentPage,
  setFetching,
  setTotalCount,
  setUsers,
  unFollowUser,
} from "redux/users-reducer";

import { UsersClass } from "./UsersClass";

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

// old variant
/* let mapDispatchToProps = (dispatch) => {
  return {
    onFollowUser: (userId) => {
      dispatch(followUser(userId));
    },
    onUnFollowUser: (userId) => {
      dispatch(unfollowUser(userId));
    },
    setUsersData: (users) => {
      dispatch(setUsers(users));
    },
    setPage: (page) => {
      dispatch(setCurrentPage(page));
    },
    setCount: (count) => {
      dispatch(setTotalCount(count));
    },
    setFetching: (value) => {
      dispatch(setFetching(value));
    },
  };
}; */

export const UsersContainer = connect(mapStateToProps, {
  followUser,
  unFollowUser,
  setUsers,
  setCurrentPage,
  setTotalCount,
  setFetching,
})(UsersClass);
