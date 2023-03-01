import React, { useState } from 'react';
import { Modal } from '../../context/Modal';
import SignupForm from './SignupForm';
import './SignupForm.css'


function SignupFormModal() {
    const [showModal, setShowModal] = useState(false);

    return (
    <>
        <button class="sign-up-button" onClick={() => setShowModal(true)}>Sign Up</button>
        {showModal && (
        <Modal onClose={() => setShowModal(false)}>
            <SignupForm class="form" />
        </Modal>
        )}
    </>
    );
}

export default SignupFormModal;
