import React, { useState } from 'react';
import * as sessionActions from '../../store/session';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import './SignupForm.css'

function SignupForm() {
    const dispatch = useDispatch();
    const sessionUser = useSelector(state => state.session.user);
    const [first_name, setFirstName] = useState('')
    const [last_name, setLastName] = useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState([]);

    if (sessionUser) return <Redirect to="/" />;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
        setErrors([]);
        return dispatch(sessionActions.signup({ first_name, last_name, email, password }))
            .catch(async (res) => {
            let data;
            try {
              // .clone() essentially allows you to read the response body twice
            data = await res.clone().json();
            } catch {
              data = await res.text(); // Will hit this case if the server is down
            }
            if (data?.errors) setErrors(data.errors);
            else if (data) setErrors([data]);
            else setErrors([res.statusText]);
        });
        }
        return setErrors(['Confirm Password field must be the same as the Password field']);
    };


    return(
        <form onSubmit={handleSubmit}>
            <ul>
                {errors.map(error=> <li key={error}>{error}</li>)}
            </ul>

            <h3>Make an account</h3>

            <label>First name
                <input type='text'
                value={first_name}
                onChange={(e) => setFirstName(e.target.value)}
                required/>
            </label>

            <label>Last name
                <input type='text'
                value={last_name}
                onChange={(e) => setLastName(e.target.value)}
                required/>
            </label>


            <label>Email
                <input type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required/>
            </label>

            <label>Password
                <input type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required/>
            </label>

            <label>Confirm password
            <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required/>
            </label>

            <button className="modal-button" type='submit'>Sign up</button>
        </form>
    )
}

export default SignupForm
