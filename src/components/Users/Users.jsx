import classes from "./Users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";

export const Users = (props) => {
  const users = props.props.props.usersData.users;
  const onFollowUser = props.props.followUser;
  const onUnFollowUser = props.props.unFollowUser;

  const setFetchingFollowing = props.props.setFetchingFollowing;
  const isFetchingFollowing = props.props.props.usersData.isFetchingFollowing;

  const pageSize = props.props.props.usersData.pageSize;
  const totalUserCount = props.props.props.usersData.totalUserCount;
  const currentPage = props.props.props.usersData.currentPage;

  let pagesCount = Math.ceil(totalUserCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  //console.log("global ", props.props.props.usersData);

  const unFollowUserHandler = (user) => {
    setFetchingFollowing(true, user.id);
    //console.log(props.props.props.usersData.isFetchingFollowing);
    axios
      .delete(
        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {
          withCredentials: true,
          headers: { "API-KEY": "68779c10-1e15-43dd-9b4e-dfae49a44d16" },
        }
      )
      .then((response) => {
        if (response.data.resultCode !== 1) {
          onUnFollowUser(user.id);

          setFetchingFollowing(false, user.id);
          //console.log(props.props.props.usersData.isFetchingFollowing);
        }
      });
  };

  const followUserHandler = (user) => {
    setFetchingFollowing(true, user.id);
    //console.log(props.props.props.usersData.isFetchingFollowing);
    axios
      .post(
        `https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
        {},
        {
          withCredentials: true,
          headers: { "API-KEY": "68779c10-1e15-43dd-9b4e-dfae49a44d16" },
        }
      )
      .then((response) => {
        onFollowUser(user.id);
        setFetchingFollowing(false, user.id);
        console.log(props.props.props.usersData.isFetchingFollowing);
      });
  };

  return (
    <div className={classes.container}>
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
                props.onChangePage(number);
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
            <NavLink to={"/profile/" + item.id}>
              <img
                src={
                  item.photos.small === null
                    ? "https://stihi.ru/pics/2013/09/01/8901.jpg"
                    : item.photos.small
                }
                alt="pict"
                className={classes.image}
              />
            </NavLink>

            <div>{item.name}</div>
            <div>{item.status}</div>
            <div>{item.uniqueUrlName}</div>
            {item.followed ? (
              <button
                disabled={isFetchingFollowing.some((id) => id === item.id)}
                className={classes.unFollowButton}
                onClick={() => {
                  unFollowUserHandler(item);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={isFetchingFollowing.some((id) => id === item.id)}
                className={classes.FollowButton}
                onClick={() => {
                  followUserHandler(item);
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
};
