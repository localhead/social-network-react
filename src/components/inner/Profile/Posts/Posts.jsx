import React from "react";

import classes from "./Posts.module.css";
import { Post } from "./Post/Post";

export const Posts = (props) => {
  const { postsData, textAreaValue } = props.props.profilePage;

  const { addPostHandler, postChangeHandler } = props;

  const newPostTextArea = React.createRef();

  const addPostHandlerInner = () => {
    const text = textAreaValue;

    addPostHandler(text);
  };

  const postChangeHandlerInner = () => {
    const text = newPostTextArea.current.value;
    postChangeHandler(text);
  };

  return (
    <div className={classes.content}>
      <div>
        <textarea
          ref={newPostTextArea}
          onChange={postChangeHandlerInner}
          value={textAreaValue}
        />
      </div>
      <div>
        <button onClick={addPostHandlerInner}>Add Post</button>
      </div>

      {postsData.map((item) => {
        return (
          <Post
            key={item.id}
            message={item.message}
            likesCount={item.likesCount}
            image={item.image}
          />
        );
      })}
    </div>
  );
};
