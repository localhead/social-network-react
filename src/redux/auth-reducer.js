import { authAPI } from "api/API";
import { stopSubmit } from "redux-form";

let initialState = {
  id: null,
  email: null,
  login: null,
  isAuthorized: false,
};

export const authReducer = (state = initialState, action) => {
  if (action.type === "SET-USER-LOGIN-DATA") {
    const stateCopy = { ...action.userData, isAuthorized: action.isAuthorized };
    return stateCopy;
  } else return state;
};

export const authUserData = (userData, isAuthorized) => {
  return {
    type: "SET-USER-LOGIN-DATA",
    userData: userData,
    isAuthorized: isAuthorized,
  };
};
/* 



*/
export const getAuthUserThunk = () => (dispatch) => {
  return authAPI.getUserAuthInfo().then((response) => {
    const userData = response.data.data;

    if (response.data.resultCode === 0) {
      dispatch(authUserData(userData, true));
    }
    return response;
  });
};

export const loginUser = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.loginIn(email, password, rememberMe).then((response) => {
      if (response.data.resultCode === 0) {
        dispatch(getAuthUserThunk());
      } else {
        // throwing error if there is an error in form
        let errorMessage =
          response.data.messages.length > 0
            ? response.data.messages[0]
            : "Unknown error";

        dispatch(stopSubmit("login", { _error: errorMessage }));
      }
    });
  };
};

export const logoutUser = () => {
  return (dispatch) => {
    authAPI.logOut().then((response) => {
      if (response.data.resultCode === 0) {
        const userData = response.data.data;

        response.data.resultCode === 0 &&
          dispatch(authUserData(userData, false));
      }
    });
  };
};
