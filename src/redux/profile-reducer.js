import { profileAPI } from "api/API";

let initialState = {
  postsData: [
    {
      id: 1,
      message:
        "Можно удалить старый или добавить новый пост, но после обновления страницы - данные удалятся",
      likesCount: 5,
      isLiked: false,
    },
    {
      id: 2,
      message: "Этот текст пришел с локального стейта..",
      likesCount: 1,
      isLiked: false,
    },
    {
      id: 3,
      message: "Этот текст пришел не с удаленного сервера",
      likesCount: 3,
      isLiked: false,
    },
  ],

  userProfile: null,
  userStatus: null,
};

export const profileReducer = (state = initialState, action) => {
  if (action.type === "ADD-POST") {
    const newPost = [
      {
        id: Number(Math.random() * 10),
        message: action.textData,
        likesCount: 0,
        isLiked: false,
      },
    ];
    const [res] = newPost;

    let stateCopy = { ...state };
    stateCopy.postsData = [res, ...state.postsData];

    return stateCopy;
  } else if (action.type === "UPDATE-PROFILE-DATA") {
    return { ...state, userProfile: action.userData };
  } else if (action.type === "DELETE-POST") {
    const newArr = state.postsData.filter(
      (postsData) => postsData.id !== action.id
    );

    let stateCopy = { ...state };
    stateCopy.postsData = newArr;

    return stateCopy;
  } else if (action.type === "TOGGLE-LIKE") {
    const res = state.postsData[action.index];
    res.isLiked = res.isLiked === false ? true : false;
    res.likesCount =
      res.isLiked === true
        ? (res.likesCount = res.likesCount + 1)
        : (res.likesCount = res.likesCount - 1);

    const newArr = [...state.postsData];

    let stateCopy = { ...state };
    stateCopy.postsData = newArr;

    return stateCopy;
  } else if (action.type === "GET-USER-STATUS") {
    let stateCopy = { ...state, userStatus: action.status };
    return stateCopy;
  }
  return state;
};

export const togglePostLike = (postIndex) => {
  return {
    type: "TOGGLE-LIKE",
    index: postIndex,
  };
};

export const deletePost = (postId) => {
  return {
    type: "DELETE-POST",
    id: postId,
  };
};

export const addPostActionCreator = (text) => {
  return {
    type: "ADD-POST",
    textData: text,
  };
};

export const setUserProfile = (data) => {
  return {
    type: "UPDATE-PROFILE-DATA",
    userData: data,
  };
};

export const getUserStatus = (status) => {
  return {
    type: "GET-USER-STATUS",
    status: status,
  };
};

export const setAuthUserStatus = (statusText) => {
  return {
    type: "SET-AUTH-USER-STATUS",
    statusText: statusText,
  };
};
/* 




*/
// Thunks
export const getProfileDataThunk = (userId) => {
  return (dispatch) => {
    profileAPI.setProfileData(userId).then((response) => {
      dispatch(setUserProfile(response.data));
    });
  };
};

export const getUserStatusThunk = (userId) => {
  return (dispatch) => {
    profileAPI.getUserStatus(userId).then((response) => {
      dispatch(getUserStatus(response.data));
    });
  };
};

export const setAuthUserStatusThunk = (statusText) => {
  return (dispatch) => {
    profileAPI.setAuthUserStatusAPI(statusText).then((response) => {
      dispatch(setAuthUserStatus(response.data));
    });
  };
};
