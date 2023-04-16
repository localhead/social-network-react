import { Routes, Route } from "react-router-dom";
import React, { Suspense } from "react";

import HeaderContainer from "components/fixed/Header/HeaderContainer";
import UsersContainer from "components/inner/Users/UsersContainer";

import { GlobalStyle } from "utils/GlobalStyles";
import { StyledAppInnerWrapper, StyledAppWrapper } from "styles";

//import ProfileContainer from "components/inner/Profile/ProfileContainer";
//import { DialogsContainer } from "components/inner/Dialogs/DialogsContainer";
import { LoginConnecter } from "components/inner/Login/LoginConnecter";

import { connect } from "react-redux";
import { initializeApp } from "redux/app-reducer";
import { Preloader } from "components/common/preloader/Preloader";
import NavbarContainer from "components/fixed/Navbar/NavbarContainer";

// What is component?
// Component is a function which always returns JSX
// App - is a component. And Component is a TAG

const ProfileContainer = React.lazy(() =>
  import("components/inner/Profile/ProfileContainer")
);

const DialogsContainer = React.lazy(() =>
  import("components/inner/Dialogs/DialogsContainer")
);

class App extends React.Component {
  /*  const { state, dispatch } = props; */

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const isInitialized = this.props.appData.isInitialized;

    if (!isInitialized) return <Preloader />;

    return (
      <div className="App">
        <GlobalStyle />
        <HeaderContainer />
        <StyledAppWrapper>
          <NavbarContainer />
          <StyledAppInnerWrapper>
            <Routes>
              <Route
                path="/profile"
                element={
                  <Suspense fallback={<div>Loading...!!!!</div>}>
                    <ProfileContainer />
                  </Suspense>
                }
              >
                <Route path=":id" element={<ProfileContainer />} />
              </Route>
              <Route
                path="/dialogs"
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <DialogsContainer />
                  </Suspense>
                }
              />
              <Route path="/users" element={<UsersContainer />} />
              <Route path="/login" element={<LoginConnecter />} />
            </Routes>
          </StyledAppInnerWrapper>
        </StyledAppWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    appData: state.appData,
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
