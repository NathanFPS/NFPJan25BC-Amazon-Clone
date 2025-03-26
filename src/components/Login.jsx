import React, {useState, useRef, useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import { Link, Route } from 'react-router-dom';
import Modal from './Modal';
import './styles/Login.css';

const reducer = (state, action) => {
  if(action.type === 'EMAIL_INPUT') {
    return {...state, emailValue: action.payload};
  }
  if(action.type === 'PASSWORD_INPUT') {
    return {...state, passwordValue: state.passwordValue};
  }
  return {emailValue: "", passwordValue: ""};
}

const Login = () => {
  const [formIsValid, setFormIsValid] = useState(false);
  const [state, dispatch] = useReducer(reducer, {
    emailValue: "", 
    passwordValue: ""
  });
  const {emailValue: email, passwordValue: password} = state;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(email.includes('@') && state.password.trim().length > 6);
    }, 500);
    return () => {
      console.log("CLEANUP");
      clearTimeout(identifier);
    }
  }, [email, password]);

  const emailChangeHandler = (e) => {
    dispatch({type: 'EMAIL_INPUT', payload: e.target.value});
  }

  const passwordChangeHandler = (e) => {
    dispatch({type: 'PASSWORD_INPUT', payload: e.target.value});
  }

  const signIn = (e) => {
    e.preventDefault();
    console.log("Entered Email: ", state.emailValue);
    console.log("Entered Password: ", state.passwordValue);
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
          <input type="text" 
            value={state.emailValue}
            onChange={emailChangeHandler}
          />
          <h5>Password</h5>
          <input type="password" 
            value={state.passwordValue}
            onChange={passwordChangeHandler}
          />
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