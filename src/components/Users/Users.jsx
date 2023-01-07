import classes from "./Users.module.css";
import React from "react";

export const Users = (props) => {
  const users = props.props.props.usersData.users;
  const onFollowUser = props.props.followUser;
  const onUnFollowUser = props.props.unFollowUser;

  const pageSize = props.props.props.usersData.pageSize;
  const totalUserCount = props.props.props.usersData.totalUserCount;
  const currentPage = props.props.props.usersData.currentPage;

  let pagesCount = Math.ceil(totalUserCount / pageSize);
  const pages = [];

  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

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
};
