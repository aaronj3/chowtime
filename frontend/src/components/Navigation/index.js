import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import SignupFormModal from '../SignupFormModal';
import './Navigation.css';

function Navigation(){
    const sessionUser = useSelector(state => state.session.user);
    const [signupFormShow, setSignupFormShow ] = useState(false);
    const [loginFormShow, setLoginFormShow ] = useState(false);

    let sessionLinks;
    if (sessionUser) {
    sessionLinks = (
        <ProfileButton user={sessionUser} />
    );
    } else {
    sessionLinks = (
        <>
            <SignupFormModal signupFormShow={signupFormShow} setSignupFormShow={setSignupFormShow} setLoginFormShow={setLoginFormShow}/>
            <LoginFormModal loginFormShow={loginFormShow} setSignupFormShow={setSignupFormShow} setLoginFormShow={setLoginFormShow}/>
        </>
    );
    }

    return (
    <ul className="nav-bar">
        <div className="nav-container">
            <li>
                <NavLink exact to="/"><img className="logo" src="https://cdn.otstatic.com/cfe/11/images/opentable-logo-153e80.svg"/></NavLink>
            </li>
            <li className="sessionLinks-container" >
                {sessionLinks}
            </li>

        </div>
    </ul>
    );
}

export default Navigation;
