import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import * as sessionActions from '../../store/session';
import { Link } from "react-router-dom";

function ProfileButton({ user }) {
    const dispatch = useDispatch();
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener("click", closeMenu);}
        , [showMenu]);



    const logout = (e) => {
        e.preventDefault();
        dispatch(sessionActions.logout());
    };

    return (
    <>
        <button class="profile-button" onClick={openMenu}>
            <i className="fa-solid fa-user-circle" />
        </button>
    {showMenu && (
    <ul className="profile-dropdown">
        <p>Hello, {user.firstName}</p>
        <li>
            <Link>My Profile</Link>
        </li>

        <li>
            <Link>My Dining History</Link>
        </li>

        <li>
            <Link>My Saved Restaurants</Link>
        </li>

        <li>
            <button onClick={logout}>Sign Out</button>
        </li>
    </ul>
    )}
    </>
    );
}

export default ProfileButton;
