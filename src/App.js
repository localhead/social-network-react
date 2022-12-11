import "./App.css";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { Header } from "./components/Header/Header";
import { Navbar } from "./components/Navbar/Navbar";
import { Profile } from "./components/Profile/Profile";
// Installing package for routing
// npm install react-router-dom -save
// -save will update json with this package
import { BrowserRouter, Routes, Route } from "react-router-dom";

// What is component?
// Component is a function which always returns JSX razmetku

// App - is a component. And Component is a TAG

const App = (props) => {
  const { state, dispatch } = props;

  return (
    <BrowserRouter>
      <div className="App">
        <div className="app-wrapper">
          <Header />
          <Navbar state={state.sideBarData} />
          <div className="app-wrapper__content">
            <Routes>
              <Route
                path="/profile"
                element={
                  <Profile
                    postsData={state.profilePage.postsData}
                    textAreaValue={state.profilePage.textAreaData}
                    dispatch={dispatch}
                  />
                }
              />
              <Route
                path="/dialogs"
                element={<Dialogs state={state.dialogsPage} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
