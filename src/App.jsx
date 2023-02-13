// Installing package for routing
// npm install react-router-dom -save
// -save will update json with this package
import { Routes, Route } from "react-router-dom";
import React from "react";
import { DialogsContainer } from "components/inner/Dialogs/DialogsContainer";
import { NavbarContainer } from "components/fixed/Navbar/NavbarContainer";

import HeaderContainer from "components/fixed/Header/HeaderContainer";
import UsersContainer from "components/inner/Users/UsersContainer";

import { GlobalStyle } from "utils/GlobalStyles";
import { StyledAppInnerWrapper, StyledAppWrapper } from "StyledApp";
import { ProfileConnecter } from "components/inner/Profile/ProfileContainer";
import { LoginConnecter } from "components/inner/Login/LoginConnecter";

// What is component?
// Component is a function which always returns JSX
// App - is a component. And Component is a TAG

const App = () => {
  /*  const { state, dispatch } = props; */

  return (
    <div className="App">
      <GlobalStyle />
      <StyledAppWrapper>
        <HeaderContainer />
        <NavbarContainer />
        <StyledAppInnerWrapper>
          <Routes>
            <Route path="/profile" element={<ProfileConnecter />}>
              <Route path=":id" element={<ProfileConnecter />} />
            </Route>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="/login" element={<LoginConnecter />} />
          </Routes>
        </StyledAppInnerWrapper>
      </StyledAppWrapper>
    </div>
  );
};

export default App;
