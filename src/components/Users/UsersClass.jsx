import { getAllUsersData, getUserData } from "api/DataAccessLayer";

import { Preloader } from "components/common/preloader/Preloader";
import React from "react";
import { Users } from "./Users";

export class UsersClass extends React.Component {
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

    this.getUsersCount();
    this.onChangePage(1);
  }

  onChangePage = (number) => {
    const setPage = this.props.setCurrentPage;
    const setUsersData = this.props.setUsers;
    const setFetching = this.props.setFetching;
    const pageSize = this.props.props.usersData.pageSize;

    setFetching(true);
    setPage(number);

    getUserData(number, pageSize).then((data) => {
      //console.log(response);
      setUsersData(data.items);
      setFetching(false);
    });
  };

  getUsersCount = () => {
    const setFetching = this.props.setFetching;
    const setCount = this.props.setTotalCount;

    getAllUsersData().then((data) => {
      //console.log(response);
      setCount(Math.ceil(data.totalCount / 70));
      setFetching(false);
    });
  };

  render() {
    const isFetching = this.props.props.usersData.isFetching;

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users props={this.props} onChangePage={this.onChangePage} />
        )}
      </>
    );
  }
}
