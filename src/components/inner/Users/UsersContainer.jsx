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
import { withAuthRedirect } from "components/highOrder/withAuthRedirect";
import { compose } from "redux";

export class UsersContainer extends React.Component {
  componentDidMount() {
    const setFetching = this.props.setFetching;
    setFetching(true);

    this.props.getTotalUsersCountThunk();
    this.onChangePage();
    console.log();
  }

  onChangePage = (number = 1) => {
    const pageSize = this.props.usersData.pageSize;
    this.props.getUsersOnPageThunk(number, pageSize);
  };

  onFollowUser = (userId) => {
    this.props.followUserThunk(userId);
  };

  onUnFollowUser = (userId) => {
    this.props.unFollowUserThunk(userId);
  };

  render() {
    const isFetching = this.props.usersData.isFetching;
    const setFetchingFollowing = this.props.setFetchingFollowing;
    const isAuthorized = this.props.authData.isAuthorized;

    return (
      <>
        {!isAuthorized && <Navigate to="/login" />}
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            {...this.props.usersData}
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
    authData: state.authData,
    usersData: state.usersData,
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
