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
        <h3>Enter your email and password</h3>
        <p>
            Enter the login credentials associated with your OpenTable account.
        </p>

        <label>
        Email
        <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
        </label>

        <br/>

        <label>
        Password
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
        />
        </label>

        <br/>

        <button class="modal-button" type="submit">Log In</button>
    </form>
    );
}

export default LoginForm;
