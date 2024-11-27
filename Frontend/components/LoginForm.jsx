import React, { useState } from "react";
import { Link } from "react-router-dom";
import { register, loginUser } from "../src/service/authapi";
import styles from "./LoginForm.module.css";

const LoginForm = ({ onLoginSuccess }) => {
  const [isRegister, setisRegister] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const { data } = await loginUser(username, password);
      setMessage(data.message);
      setUsername("");
      setPassword("");
      onLoginSuccess(data);
      setError("");
    } catch (error) {
      console.log("The error is", error.message);
      setUsername("");
      setPassword("");
      setMessage("");
      setError("Invalid login");
    }
  };
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const { data } = await register(username, password);
      setisRegister(false);
      setMessage(data.message);
      setUsername("");
      setPassword("");
      setconfirmPassword("");
      setError("");
    } catch (error) {
      console.log("The error is", error.message);
      setUsername("");
      setPassword("");
      setconfirmPassword("");
      setMessage("");
      setError("An error occcured");
    }
  };
  const handleRegisterToggle = () => {
    setisRegister(!isRegister);
    setError("");
    setMessage("");
  };
  return (
    <>
      <div className={styles.mainContainer}>
        <form
          onSubmit={isRegister ? handleRegister : handleLogin}
          className="bg-white rounded-lg shadow-md w-full max-w-sm max-auto"
        >
          <div>
            <div className={styles.heading}>
              {isRegister ? "Create Account" : "Login"}{" "}
            </div>
          </div>
          <p className={styles.welcome}>
            {isRegister
              ? "Looks like you are new here"
              : "Glad to see you again!"}
          </p>
          <div className="p-6">
            <div className={styles.logLine}>
              <label className={styles.label}>Username:</label>
              <input
                label="Username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                placeholder="Enter your username"
                required
              />
            </div>
            <div className={styles.logLine}>
              <label className={styles.label}>Password:</label>
              <input
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                placeholder="Enter your password"
                required
              />
            </div>
            {isRegister ? (
              <div className={styles.logLine}>
                <label className="text-gray-600 text-sm">
                  Confirm Password
                </label>
                <input
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setconfirmPassword(e.target.value)}
                  className="w-full p-2 border rounded mt-2"
                  placeholder="Enter password again"
                  required
                />
              </div>
            ) : (
              ""
            )}
            {error && <p className="text-red-500 text-sm mb-3">{error}</p>}
            {message && (
              <p className="text-green-600 text-sm mb-3">{message}</p>
            )}
            <button type="submit" className={styles.loginBtn}>
              {isRegister ? "Register" : "Login"}
            </button>
            <div>
              <div className={styles.msg}>
                {isRegister
                  ? "Already have an account"
                  : "Dont have an account?"}
                <Link to="" onClick={handleRegisterToggle}>
                  {isRegister ? "Login" : "Create Account"}
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginForm;
