import { useNavigate } from "react-router-dom";
import classes from "./Signup.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function SignUp() {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [message, setMessage] = useState("");
  const [enteredName, setEnteredName] = useState("");
  const [enteredSurname, setEnteredSurname] = useState("");
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredPassword, setEnteredPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isUsernameValid, setIsUsernameValid] = useState(false);
  const [passwordsMatched, setPasswordsMatched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  function usernameHandler(e) {
    const enteredValue = e.target.value;
    setEnteredUsername(enteredValue);

    const regexUsername = /^[a-zA-Z0-9]+$/;
    if (regexUsername.test(enteredValue)) {
      setIsUsernameValid(true);
    } else {
      setIsUsernameValid(false);
    }
  }

  function passwordValidHandler(e) {
    const enteredValue = e.target.value;
    setEnteredPassword(enteredValue);

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    if (regexPassword.test(enteredValue)) {
      setIsPasswordValid(true);
    } else {
      setIsPasswordValid(false);
    }
  }
  function nameHandler(e) {
    const enteredValue = e.target.value;
    setEnteredName(enteredValue);
  }
  function surnameHandler(e) {
    const enteredValue = e.target.value;
    setEnteredSurname(enteredValue);
  }
  function passwordConfirmHandler(e) {
    const enteredValue = e.target.value;
    if (enteredValue === enteredPassword) {
      setPasswordsMatched(true);
    } else {
      setPasswordsMatched(false);
    }
  }
  function showPasswordHandler() {
    setShowPassword(!showPassword);
    setChecked(!showPassword);
  }

  function signUpHandler(e) {
    e.preventDefault();
    if (isPasswordValid && isUsernameValid && passwordsMatched) {
      setMessage("Success");
    } else {
      setMessage("Invalid");
    }
    console.log("Girilen kullanıcı adi:", enteredUsername);
    console.log("Girilen kullanıcı adi gecerli mi?:", isUsernameValid);
    console.log("Girilen şifre:", enteredPassword);
    console.log("Girilen şifre geçerli mi:?", isPasswordValid);
    console.log("Girilen isim: ", enteredName);
    console.log("Girilen soyisim: ", enteredSurname);
    console.log("Şifreler eşleşti mi: ", passwordsMatched);
    setEnteredName("");
    setEnteredSurname("");
    setEnteredUsername("");
    setEnteredPassword("");
    setIsPasswordValid(false);
    setIsUsernameValid(false);
    setPasswordsMatched(false);
    setShowPassword(false);
    setChecked(false);
    document.getElementById("confirmPassword").value = "";

    navigate("/completeProfile");
  }

  return (
    <div className={classes.container}>
      <h4 className={classes.heading}>Create Your Account</h4>
      {/* <h1 className={classes.heading}>{message}</h1> */}
      <label className={classes.credentials}>Name</label>
      <input
        className={classes.input}
        value={enteredName}
        onChange={nameHandler}
        type="text"
      />
      <label className={`${classes.heading} ${classes.label}`}>Surname</label>
      <input
        className={classes.input}
        value={enteredSurname}
        onChange={surnameHandler}
        type="text"
      />

      <label className={`${classes.heading} ${classes.label}`}>Username</label>
      <input
        className={classes.input}
        type="text"
        onChange={usernameHandler}
        value={enteredUsername}
      />
      {isUsernameValid && (
        <span className={`tick-icon ${classes.icon}`}>&#10003;</span>
      )}
      <label className={`${classes.description}`}>
        Letters and numbers only
      </label>
      <label className={classes.label}>Password</label>
      <input
        className={classes.input}
        type={showPassword ? "text" : "password"}
        onChange={passwordValidHandler}
        value={enteredPassword}
      />
      {isPasswordValid && (
        <span className={`tick-icon ${classes.icon}`}>&#10003;</span>
      )}
      <label className={`${classes.description} ${classes.label}`}>
        Minimum 8 characters, at least one uppercase letter, one lowercase
        letter and one number
      </label>
      <label className={classes.label}>Confirm Password</label>
      <input
        className={classes.input}
        id="confirmPassword"
        type={showPassword ? "text" : "password"}
        onChange={passwordConfirmHandler}
      />
      {passwordsMatched && (
        <span className={`tick-icon ${classes.icon}`}>&#10003;</span>
      )}
      <label className={classes.label}>Show Password</label>
      <input
        className={classes.input}
        checked={checked}
        type="checkbox"
        id="showPassword"
        onChange={showPasswordHandler}
      />
      <button className={classes.button} onClick={signUpHandler}>
        Sign Up
      </button>
      <Link to="/login" className={classes.a}>
        Log in instead
      </Link>
    </div>
  );
}
export default SignUp;
