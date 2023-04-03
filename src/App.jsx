import { Routes, Route } from "react-router-dom";
import React from "react";
import { DialogsContainer } from "components/inner/Dialogs/DialogsContainer";
import { NavbarContainer } from "components/fixed/Navbar/NavbarContainer";

import HeaderContainer from "components/fixed/Header/HeaderContainer";
import UsersContainer from "components/inner/Users/UsersContainer";

import { GlobalStyle } from "utils/GlobalStyles";
import { StyledAppInnerWrapper, StyledAppWrapper } from "styles";
import { ProfileConnecter } from "components/inner/Profile/ProfileContainer";
import { LoginConnecter } from "components/inner/Login/LoginConnecter";
import { connect } from "react-redux";
import { initializeApp } from "redux/app-reducer";
import { Preloader } from "components/common/preloader/Preloader";

// What is component?
// Component is a function which always returns JSX
// App - is a component. And Component is a TAG

class App extends React.Component {
  /*  const { state, dispatch } = props; */

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    const isInitialized = this.props.state.isInitialized;
    if (!isInitialized) return <Preloader />;

    return (
      <div className="App">
        <GlobalStyle />
        <HeaderContainer />
        <StyledAppWrapper>
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
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.appData,
  };
};

export default connect(mapStateToProps, {
  initializeApp,
})(App);
