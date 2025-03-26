import React, {useState, useRef} from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Modal from './Modal';
import './styles/Login.css';

const Login = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const signIn = (e) => {
    e.preventDefault();
    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;
    console.log("Email: ", enteredEmail + "Password: ", enteredPassword);
  }

  return (
    <div className="login">
      <Link to="/">
        <img className="login-logo"
        src="http://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
      </Link>
      <div className="login-container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input type="text" ref={emailRef} />
          <h5>Password</h5>
          <input type="password" ref={passwordRef}/>
          <button type="submit" className="login-signInButton">Sign In</button>
        </form>
        <p>
          By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>
        <button className="login-registerButton">Create your Amazon Account</button>
      </div>
    </div>
  );
}



export default Login;