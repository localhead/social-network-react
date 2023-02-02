import { Preloader } from "components/common/preloader/Preloader";
import React from "react";

import { Users } from "./Users";

import { connect } from "react-redux";
import {
  setCurrentPage,
  setFetching,
  setFetchingFollowing,
  setTotalCount,
  setUsers,
  getUsersOnPageThunk,
  getTotalUsersCountThunk,
  followUserThunk,
  unFollowUserThunk,
} from "redux/users-reducer";
import { Navigate } from "react-router-dom";
import { withAuthRedirect } from "highOrderComponents/withAuthRedirect";
import { compose } from "redux";

export class UsersContainer extends React.Component {
  /*   constructor(props) {
    super(props);

    this.onFollowUser = props.onFollowUser;
    this.onUnFollowUser = props.onUnFollowUser;
    this.setUsersData = props.setUsersData;
    this.users = props.props.usersData.users;
  } */

  componentDidMount() {
    const setFetching = this.props.setFetching;
    setFetching(true);

    this.props.getTotalUsersCountThunk();
    this.onChangePage();
    console.log();
  }

  onChangePage = (number = 1) => {
    const pageSize = this.props.props.usersData.pageSize;
    this.props.getUsersOnPageThunk(number, pageSize);
  };

  onFollowUser = (userId) => {
    this.props.followUserThunk(userId);
  };

  onUnFollowUser = (userId) => {
    this.props.unFollowUserThunk(userId);
  };

  render() {
    const isFetching = this.props.props.usersData.isFetching;
    const userDataProps = this.props.props.usersData;
    const setFetchingFollowing = this.props.setFetchingFollowing;
    const isAuthorized = this.props.props.authData.isAuthorized;

    return (
      <>
        {!isAuthorized && <Navigate to="/login" />}
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            {...userDataProps}
            onChangePage={this.onChangePage}
            setFetchingFollowing={setFetchingFollowing}
            onFollowUser={this.onFollowUser}
            onUnFollowUser={this.onUnFollowUser}
          />
        )}
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
export default compose(
  withAuthRedirect,
  connect(mapStateToProps, {
    setUsers,
    setCurrentPage,
    setTotalCount,
    setFetching,
    setFetchingFollowing,
    getUsersOnPageThunk,
    getTotalUsersCountThunk,
    followUserThunk,
    unFollowUserThunk,
  })
)(UsersContainer);

// without compose:
// let AuthRedirectContainer = withAuthRedirect(UsersContainer);
// export const UsersConnecter = connect(mapStateToProps, {
//   setUsers,
//   setCurrentPage,
//   setTotalCount,
//   setFetching,
//   setFetchingFollowing,
//   getUsersOnPageThunk,
//   getTotalUsersCountThunk,
//   followUserThunk,
//   unFollowUserThunk,
// })(AuthRedirectContainer);
/* 






*/
// old variant of mapDispatchToProps
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
