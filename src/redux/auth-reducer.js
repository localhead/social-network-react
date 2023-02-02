import { authAPI } from "api/DataAccessLayer";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === "SET-USER-LOGIN-DATA") {
    //console.log(state.isAuthorized);
    const stateCopy = { ...action.userData, isAuthorized: true };
    return stateCopy;
  } else return state;
};

export const authUserData = (userData) => {
  return {
    type: "SET-USER-LOGIN-DATA",
    userData: userData,
  };
};
/* 



*/
export const getAuthUserThunk = () => {
  return (dispatch) => {
    authAPI.getUserAuthInfo().then((response) => {
      const userData = response.data.data;
      console.log(response.data.resultCode);
      console.log("Current user info: ", userData);

      response.data.resultCode === 0 && dispatch(authUserData(userData));
    });
  };
};
