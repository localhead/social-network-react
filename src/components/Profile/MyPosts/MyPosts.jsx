import React from "react";

import classes from "./MyPosts.module.css";
import { Post } from "./Post/Post";

export const MyPosts = (props) => {
  const { postsData, dispatch, textAreaValue } = props;

  const newPostTextArea = React.createRef();

  const addPostHandler = () => {
    const text = textAreaValue;
    dispatch({ type: "ADD-POST", textData: text });
  };

  const postChangeHandler = () => {
    const text = newPostTextArea.current.value;
    dispatch({ type: "UPDATE-NEW-POST-TEXT", textData: text });
  };

  return (
    <div className={classes.content}>
      <div>
        <textarea
          ref={newPostTextArea}
          onChange={postChangeHandler}
          value={textAreaValue}
        />
      </div>
      <div>
        <button onClick={addPostHandler}>Add Post</button>
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
