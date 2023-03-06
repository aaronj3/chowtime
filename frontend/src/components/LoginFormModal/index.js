import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import "./LoginForm.css";
import { Link } from 'react-router-dom';

function LoginFormModal({loginFormShow, setSignupFormShow, setLoginFormShow}) {


  return (
    <>
      <button className="nav-button" id="log-in-button" onClick={() => setLoginFormShow(true)}>Log In</button>
      {loginFormShow && (
        <Modal className="modal" onClose={() => setLoginFormShow(false)}>
          <LoginForm setLoginFormShow={setLoginFormShow} setSignupFormShow={setSignupFormShow} />
          <br/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
