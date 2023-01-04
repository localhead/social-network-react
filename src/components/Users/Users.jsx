import axios from "axios";
import React from "react";

import classes from "./Users.module.css";

export const Users = (props) => {
  /*   const data = [
    {
      id: 1,
      photo: "https://stihi.ru/pics/2013/09/01/8901.jpg",
      name: "Dmitry",
      followed: false,
      location: {
        city: "Moscow",
        country: "Russia",
      },
    },
    {
      id: 2,
      photo: "https://stihi.ru/pics/2013/09/01/8901.jpg",
      name: "Maksim",
      followed: true,
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
    },
    {
      id: 3,
      photo: "https://stihi.ru/pics/2013/09/01/8901.jpg",
      name: "Maksim",
      followed: true,
      location: {
        city: "Kiev",
        country: "Ukraine",
      },
    },
  ]; */

  let users = props.props.usersData.users;

  const { onFollowUser, onUnFollowUser, setUsersData } = props;

  let getUsers = () => {
    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          console.log(response);
          setUsersData(response.data.items);
        });
    }
  };
  console.log(users);

  const unFollowHandler = (userId) => {
    onUnFollowUser(userId);
  };

  const FollowHandler = (userId) => {
    onFollowUser(userId);
  };

  return (
    <div>
      {getUsers()}
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
                  unFollowHandler(item.id);
                }}
              >
                Unfollow
              </button>
            ) : (
              <button
                onClick={() => {
                  FollowHandler(item.id);
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
