import React from "react";

import classes from "./Post.module.css";

export const Post = function (props) {
  return (
    <div className={classes.post}>
      <div className={classes.postItem} key={props.id}>
        <img className={classes.avatar} src={props.image} alt="avatar" />
        {props.message}
        <div className={classes.postLikes}>{props.likesCount} likes</div>
      </div>
    </div>
  );
};
