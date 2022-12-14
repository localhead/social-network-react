import { connect } from "react-redux";
import { addPostActionCreator, updateNewPostText } from "redux/profile-reducer";
import { MyPosts } from "./MyPosts";

/* export const MyPostsContainer = (props) => {
  const { postsData, dispatch, textAreaValue } = props;

  const addPostHandler = (text) => {
    dispatch(addPostActionCreator(text));
  };

  const postChangeHandler = (text) => {
    dispatch(updateNewPostText(text));
  };

  return (
    <MyPosts
      updateNewPostText={postChangeHandler}
      postsData={postsData}
      updateAddNewPost={addPostHandler}
      textAreaValue={textAreaValue}
    />
  );
}; */

let mapStateToProps = (state) => {
  return {
    props: state,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPostHandler: (text) => {
      dispatch(addPostActionCreator(text));
    },
    postChangeHandler: (text) => {
      dispatch(updateNewPostText(text));
    },
  };
};

export const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);
