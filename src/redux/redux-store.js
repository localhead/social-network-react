import { combineReducers, legacy_createStore as createStore } from "redux";
import { dialogsReducer } from "./dialogs-reducer";
import { profileReducer } from "./profile-reducer";
import { sidebarReducer } from "./sidebar-reducer";

export let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebarData: sidebarReducer,
});

let store = createStore(reducers);

window.store = store;

export default store;
