import classes from "./Login.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [enteredUsername, setUsername] = useState("");
  const [enteredPassword, setPassword] = useState("");
  function usernameHandler(e) {
    const value = e.target.value;
    setUsername(value);
  }
  function passwordHandler(e) {
    const value = e.target.value;
    setPassword(value);
  }
  function loginHandler(e) {
    e.preventDefault();
    console.log(enteredUsername);
    console.log(enteredPassword);
    if (!checkUsername()) {
      alert("invalid username");
      return;
    }
    if (!checkPassword) {
      alert("invalid password");
      return;
    }
    setPassword("");
    setUsername("");
    navigate("/");
  }
  function isAlphanumeric(str) {
    return /^[a-zA-Z0-9]+$/.test(str);
  }

  const checkUsername = () => {
    return enteredUsername.length > 0 && isAlphanumeric(enteredUsername);
  };

  function checkPassword(input) {
    if (input.length < 8) {
      return false;
    }

    if (!/[A-Z]/.test(input)) {
      return false;
    }

    if (!/[a-z]/.test(input)) {
      return false;
    }

    if (!/\d/.test(input)) {
      return false;
    }

    return true;
  }

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>Log In</h4>
      <label className={classes.credential}>Username</label>
      <input
        className={classes.input}
        value={enteredUsername}
        type="text"
        onChange={usernameHandler}
      ></input>
      <label className={classes.credential}>Password</label>
      <input
        className={classes.input}
        value={enteredPassword}
        type="password"
        onChange={passwordHandler}
      ></input>
      <button className={classes.loginButton} onClick={loginHandler}>
        Log In
      </button>
      <Link to="/signUp" className={classes.link}>
        Sign Up
      </Link>
      <Link to="/forgotPassword" className={classes.link}>
        Forgot Password?
      </Link>
    </div>
  );
};

export default Login;
