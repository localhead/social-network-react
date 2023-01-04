import "./App.css";

import { Header } from "./components/Header/Header";

import { Profile } from "./components/Profile/Profile";
// Installing package for routing
// npm install react-router-dom -save
// -save will update json with this package
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { DialogsContainer } from "components/Dialogs/DialogsContainer";
import { NavbarContainer } from "components/Navbar/NavbarContainer";

import { UsersContainer } from "components/Users/UsersContainer";

// What is component?
// Component is a function which always returns JSX razmetku

// App - is a component. And Component is a TAG

const App = () => {
  /*  const { state, dispatch } = props; */

  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <NavbarContainer />
          <div className="app-wrapper__content">
            <Routes>
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs" element={<DialogsContainer />} />
              <Route path="/users" element={<UsersContainer />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
