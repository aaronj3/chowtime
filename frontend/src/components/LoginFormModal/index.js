import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import LoginForm from './LoginForm';
import "./LoginForm.css";
import DemoLogin from './DemoLogin';

function LoginFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="nav-button" id="log-in-button" onClick={() => setShowModal(true)}>Log In</button>
      {showModal && (
        <Modal className="modal" onClose={() => setShowModal(false)}>
          <LoginForm />
          <br/>
          <DemoLogin/>
        </Modal>
      )}
    </>
  );
}

export default LoginFormModal;
