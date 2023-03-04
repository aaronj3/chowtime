import React from 'react';
import { Route, Switch } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";
import LoginForm from './components/LoginFormModal/LoginForm';
import SignupForm from './components/SignupFormModal/SignupForm';
import SearchSplash from './components/SearchSplash';
import SplashIndex from './components/SplashIndex';
import RestaurantProfile from './components/RestaurantProfile';

function App() {
  return (
    <>
      <Navigation />
        <Switch>
          <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/signup">
            <SignupForm />
          </Route>

          <Route exact path="/">
            <SearchSplash />
            <SplashIndex />
          </Route>

          <Route exact path="/restaurants/:restaurantId">
            <RestaurantProfile/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
