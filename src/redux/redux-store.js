import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";
import { reducer as formReducer } from "redux-form";

import ThunkMiddleware from "redux-thunk";
import { appReducer } from "./app-reducer";

export let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
  authData: authReducer,
  appData: appReducer,
  form: formReducer,
});

// applyMiddleware(ThunkMiddleware) - allows us to use thunks
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
