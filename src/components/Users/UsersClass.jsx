import axios from "axios";
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

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${pageSize}`,
        { withCredentials: true }
      )
      .then((response) => {
        //console.log(response);
        setUsersData(response.data.items);
        setFetching(false);
      });
  };

  getUsersCount = () => {
    const setFetching = this.props.setFetching;
    const setCount = this.props.setTotalCount;

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users`, {
        withCredentials: true,
      })
      .then((response) => {
        //console.log(response);
        setCount(Math.ceil(response.data.totalCount / 70));
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
