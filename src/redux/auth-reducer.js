import { usersAPI } from "api/DataAccessLayer";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === "SET-USER-LOGIN-DATA") {
    const resultState = { ...state, ...action.userData, isAuthorized: true };
    return resultState;
  }

  return state;
};

export const authUserData = (userData) => {
  return {
    type: "SET-USER-LOGIN-DATA",
    userData: userData,
  };
};
/* 



*/
export const getAuthUserThunk = (authStatus) => {
  return (dispatch) => {
    usersAPI.getUserAuthInfo().then((response) => {
      const userData = response.data.data;
      //console.log("Current user info: ", userData);

      !authStatus && dispatch(authUserData(userData));
    });
  };
};
