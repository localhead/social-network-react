import { profileAPI } from "api/API";

let initialState = {
  postsData: [
    {
      id: "1",
      message: "fuck you",
      likesCount: "5",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: "2",
      message: "good boy",
      likesCount: "33",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
    {
      id: "3",
      message: "bad life",
      likesCount: "12",
      image:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
    },
  ],
  textAreaValue: "fuck life",
  userProfile: null,
  userStatus: "init",
};

export const profileReducer = (state = initialState, action) => {
  if (action.type === "ADD-POST") {
    const newPost = [
      {
        id: String(Math.random() * 10),
        message: action.textData,
        likesCount: "10",
        image:
          "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1780&q=80",
      },
    ];
    const [res] = newPost;

    let stateCopy = { ...state };
    stateCopy.postsData = [...state.postsData, res];

    stateCopy.textAreaValue = "";

    return stateCopy;
  } else if (action.type === "UPDATE-PROFILE-DATA") {
    //console.log(action.userData);
    return { ...state, userProfile: action.userData };
  } else if (action.type === "GET-USER-STATUS") {
    let stateCopy = { ...state, userStatus: action.status };
    return stateCopy;
  } else if (action.type === "SET-AUTH-USER-STATUS") {
  }
  return state;
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
