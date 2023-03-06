import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css'
import { Link } from 'react-router-dom';


function SignupFormModal({signupFormShow, setSignupFormShow, setLoginFormShow }) {
    // const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button className="nav-button" id="sign-up-button" onClick={() => setSignupFormShow(true)}>Sign Up</button>
        {signupFormShow && (
        <Modal className="modal" onClose={() => setSignupFormShow(false)}>
            <SignupForm className="form" setSignupFormShow={setSignupFormShow} setLoginFormShow={setLoginFormShow} />
        </Modal>
        )}
    </>
    );
}

export default SignupFormModal;
