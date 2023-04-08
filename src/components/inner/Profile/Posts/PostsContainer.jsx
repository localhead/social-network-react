import { connect } from "react-redux";
import {
  addPostActionCreator,
  deletePost,
  togglePostLike,
} from "redux/profile-reducer";
import { Posts } from "./Posts";

let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
  };
};

export const PostsContainer = connect(mapStateToProps, {
  addPostActionCreator,
  togglePostLike,
  deletePost,
})(Posts);
