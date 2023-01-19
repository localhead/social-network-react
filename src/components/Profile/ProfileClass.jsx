import axios from "axios";
import React from "react";
import { Profile } from "./Profile";

export class ProfileClass extends React.Component {
  componentDidMount() {
    this.getUserProfile();
  }

  getUserProfile() {
    //console.log(this.props.router.params.id);
    let userId = this.props.router.params.id;
    if (!userId) userId = 2;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`, {
        withCredentials: true,
      })
      .then((response) => {
        this.props.setUserProfile(response.data);
        //console.log(this.props.props);
      });
  }

  render() {
    return <Profile props={this.props} />;
  }
}
