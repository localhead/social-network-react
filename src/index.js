import "./index.css";

import store from "./redux/state";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

export let rerenderTree = (state) => {
  console.log(state);
  root.render(
    <React.StrictMode>
      <App
        state={state}
        // байндим метод к стору, чтобы this внутри метода не переопределился на что-то другое.
        dispatch={store.dispatch.bind(store)}
      />
    </React.StrictMode>
  );
};

rerenderTree(store.getState());

store.subscribe(rerenderTree);
