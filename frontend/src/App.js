import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";
import LoginForm from './components/LoginFormModal/LoginForm';
import SignupForm from './components/SignupFormModal/SignupForm';
import SearchSplash from './components/SearchSplash';

function App() {
  return (
    <>
      <Navigation />
      <SearchSplash />
        <Switch>
          <Route path="/login">
            <LoginForm />
          </Route>
          <Route path="/signup">
            <SignupForm />
          </Route>
        </Switch>
    </>
  );
}

export default App;
