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
import ThunkMiddleware from "redux-thunk";

export let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
  authData: authReducer,
});

// applyMiddleware(ThunkMiddleware) - allows us to use thunks
let store = createStore(reducers, applyMiddleware(ThunkMiddleware));

export default store;
