import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";
import { usersReducer } from "./users-reducer";

export let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarData: sidebarReducer,
  usersData: usersReducer,
});

let store = createStore(reducers);

export default store;
