import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import DemoLogin from "./DemoLogin";

function LoginForm() {
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ email, password }))
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
    };

    return (
    <form onSubmit={handleSubmit}>
        <ul>
        {errors.map(error => <li key={error}>{error}</li>)}
        </ul>
        <div className="form-container">
            <div className="form-body-container" >
                <h2 className="modal-CTA-header">Enter your email and password</h2>
                <p className="modal-CTA-subtext">
                    Enter the login credentials associated with your OpenTable account.
                </p>

                <label>
                <input className="form-field"
                    placeholder='Email'
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                </label>

                <br/>

                <label>
                <input className="form-field"
                    placeholder='Password'
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                </label>

            <br/>

        <button className="modal-button" type="submit">Log In</button>
            </div>
        </div>
    </form>
    );
}

export default LoginForm;
