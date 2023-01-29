import classes from "./Users.module.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const Users = (props) => {
  const { users, isFetchingFollowing, pageSize, totalUserCount, currentPage } =
    props;

  let pagesCount = Math.ceil(totalUserCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  //console.log("global ", isFetchingFollowing);

  const followUserHandler = (userId) => {
    props.onFollowUser(userId);
  };

  const UnFollowUserHandler = (userId) => {
    props.onUnFollowUser(userId);
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
                  UnFollowUserHandler(item.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                disabled={isFetchingFollowing.some((id) => id === item.id)}
                className={classes.FollowButton}
                onClick={() => {
                  followUserHandler(item.id);
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
