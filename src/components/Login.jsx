import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/authContext';
import './styles/Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false); // Toggle between sign-in and sign-up

    const ctx = useContext(AuthContext);

    const emailChangeHandler = (e) => {
        setEmail(e.target.value);
    };

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        if (isSignup) {
            ctx.onSignup(email, password); // Signup
        } else {
            ctx.onLogin(email, password); // Login
        }
    };

    const toggleAuthMode = () => {
        setIsSignup((prevMode) => !prevMode);
    };

    return (
        <div className="login">
            <Link to="/">
                <img className="login-logo" src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
            </Link>
            <div className="login-container">
                <h1>{isSignup ? 'Create Account' : 'Sign In'}</h1>
                <form onSubmit={submitHandler}>
                    <h5>Email</h5>
                    <input
                        type="text"
                        value={email}
                        onChange={emailChangeHandler}
                    />
                    <h5>Password</h5>
                    <input
                        type="password"
                        value={password}
                        onChange={passwordChangeHandler}
                    />
                    <button type="submit" className="login-signInButton">{isSignup ? 'Sign Up' : 'Sign In'}</button>
                </form>
                <p>
                    By signing-in or signing-up you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice, and our Interest-Based Ads Notice.
                </p>
                <button className="login-registerButton" onClick={toggleAuthMode}>
                    {isSignup ? 'Already have an account? Sign In' : 'Create your Amazon Account'}
                </button>
            </div>
        </div>
    );
};

export default Login;