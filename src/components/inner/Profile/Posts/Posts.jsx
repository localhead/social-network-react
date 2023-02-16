import React from "react";

import { Post } from "./Post/Post";
import { AddPost } from "../AddPost/AddPost";
import { StyledPosts } from "./StyledPosts";

export const Posts = (props) => {
  const { postsData } = props.props.profilePage;

  const { addPostHandler } = props;

  const addPostHandlerInner = (formData) => {
    // console.log(formData.postText);
    addPostHandler(formData.postText);
  };

  return (
    <StyledPosts>
      <AddPost onSubmit={addPostHandlerInner} />

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
    </StyledPosts>
  );
};
