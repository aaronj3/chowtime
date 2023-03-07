import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Switch, useHistory } from 'react-router-dom';
// import LoginFormPage from './components/LoginFormPage';
// import SignupFormPage from './components/SignupFormPage';
import Navigation from "./components/Navigation";
import LoginForm from './components/LoginFormModal/LoginForm';
import SignupForm from './components/SignupFormModal/SignupForm';
import SearchSplash from './components/SearchSplash';
import SplashIndex from './components/SplashIndex';
import RestaurantProfile from './components/RestaurantProfile';
import UserProfile from './components/UserProfile';

function App() {

  const sessionUser = useSelector(state => state.session.user);
  const history = useHistory()

  function requireLogIn(component){
    return !sessionUser ? history.push('/') : component
  }

  return (
    <>
    <div className="wrapper">
      <Navigation />
        <Switch>
          {/* <Route exact path="/login">
            <LoginForm />
          </Route>

          <Route exact path="/signup">
            <SignupForm />
          </Route> */}

          <Route exact path="/">
            <SearchSplash />
            <SplashIndex />
          </Route>

          <Route exact path="/restaurants/:restaurantId">
            <RestaurantProfile/>
          </Route>

          <Route exact path="/user">
            {requireLogIn(<UserProfile/>)}
          </Route>
        </Switch>
    </div>
    </>
  );
}

export default App;
