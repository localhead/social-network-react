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

  getUsers = () => {
    const users = this.props.props.usersData.users;
    const setUsersData = this.props.setUsersData;

    if (users.length === 0) {
      axios
        .get("https://social-network.samuraijs.com/api/1.0/users")
        .then((response) => {
          console.log(response.data.items);
          setUsersData(response.data.items);
        });
    }
  };

  render() {
    const users = this.props.props.usersData.users;
    const onFollowUser = this.props.onFollowUser;
    const onUnFollowUser = this.props.onUnFollowUser;

    return (
      <div>
        <button onClick={this.getUsers}>get users</button>
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
