import axios from "axios";
import React from "react";
import classes from "./Users.module.css";

export class UsersClass extends React.Component {
  /*   constructor(props) {
    super(props);

    this.onFollowUser = props.onFollowUser;
    this.onUnFollowUser = props.onUnFollowUser;
    this.setUsersData = props.setUsersData;
    this.users = props.props.usersData.users;
  } */

  componentDidMount() {
    this.getUsersCount();
  }

  onChangePage = (number) => {
    const setPage = this.props.setPage;
    const setUsersData = this.props.setUsersData;

    const pageSize = this.props.props.usersData.pageSize;

    setPage(number);

    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${number}&count=${pageSize}`
      )
      .then((response) => {
        console.log(response.data.totalCount);
        setUsersData(response.data.items);
      });
  };

  getUsersCount = () => {
    const setCount = this.props.setCount;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users`)
      .then((response) => {
        console.log(response.data.totalCount);
        setCount(Math.ceil(response.data.totalCount / 100));
      });
  };

  render() {
    const users = this.props.props.usersData.users;
    const onFollowUser = this.props.onFollowUser;
    const onUnFollowUser = this.props.onUnFollowUser;

    const pageSize = this.props.props.usersData.pageSize;
    const totalUserCount = this.props.props.usersData.totalUserCount;
    const currentPage = this.props.props.usersData.currentPage;

    let pagesCount = Math.ceil(totalUserCount / pageSize);
    const pages = [];

    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i);
    }

    console.log(pagesCount);

    return (
      <div>
        <div className={classes.pages}>
          {pages.map((number, index) => {
            return (
              <div
                key={index}
                className={
                  number === currentPage
                    ? classes.buttonSelected
                    : classes.buttonBasic
                }
                onClick={(e) => {
                  this.onChangePage(number);
                }}
              >
                {number}
              </div>
            );
          })}
        </div>

        {users.map((item) => {
          return (
            <div key={item.id}>
              <img
                src={
                  item.photos.small === null
                    ? "https://stihi.ru/pics/2013/09/01/8901.jpg"
                    : item.photos.small
                }
                alt="pict"
                className={classes.image}
              />
              <div>{item.name}</div>
              <div>{item.status}</div>
              <div>{item.uniqueUrlName}</div>
              {item.followed ? (
                <button
                  onClick={() => {
                    onUnFollowUser(item.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    onFollowUser(item.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}
