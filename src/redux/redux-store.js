import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./auth-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

export let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
  authData: authReducer,
});

let store = createStore(reducers);

export default store;
