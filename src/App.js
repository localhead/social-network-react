import "./App.css";

// Installing package for routing
// npm install react-router-dom -save
// -save will update json with this package
import { Routes, Route } from "react-router-dom";
import React from "react";
import { DialogsContainer } from "components/Dialogs/DialogsContainer";
import { NavbarContainer } from "components/Navbar/NavbarContainer";

import { UsersContainer } from "components/Users/UsersContainer";
import { ProfileContainer } from "components/Profile/ProfileContainer";
import HeaderContainer from "components/Header/HeaderContainer";

// What is component?
// Component is a function which always returns JSX razmetku

// App - is a component. And Component is a TAG

const App = () => {
  /*  const { state, dispatch } = props; */

  return (
    <div className="App">
      <div className="app-wrapper">
        <HeaderContainer />
        <NavbarContainer />
        <div className="app-wrapper__content">
          <Routes>
            <Route path="/profile" element={<ProfileContainer />} />
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
