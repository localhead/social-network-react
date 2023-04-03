import { getAuthUserThunk } from "./auth-reducer";

// the state
let initialState = {
  isInitialized: false,
};
/* 

*/
// reducers
export const appReducer = (state = initialState, action) => {
  if (action.type === "SET-INITIALIZED") {
    return { ...state, isInitialized: true };
  } else return state;
};
/* 



*/
// Setters
export const setInitialized = () => {
  return {
    type: "SET-INITIALIZED",
  };
};
/* 


*/
// thunks
export const initializeApp = () => {
  return (dispatch) => {
    // waiting till our promise will return promise
    const authPromise = dispatch(getAuthUserThunk());

    // when promise or promises above will be received - we execute them down bellow
    Promise.all([authPromise]).then(() => {
      dispatch(setInitialized());
    });
  };
};
