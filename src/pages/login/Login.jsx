import React, { useState } from "react";
import styles from "./Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const gotoHome = () => navigate("/");

  const gotoRegister = () => navigate("/signup");

  const gotoForgotpassword = () => navigate("/forgetpassword");

  const handleSubmit = (e) => {
    e.preventDefault();

    const loginData = {
      username,
      password,
    };

    console.log(JSON.stringify(loginData));

    navigate("/dashboard");
  };

  return (
    <main className={styles.main}>
      <img
        src="./images/assignment.png"
        alt="_blank"
        className={styles.coverImage}
      />

      <div className={styles.container}>
        <div className={styles.box}></div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <img
            src="./images/logo.svg"
            alt="_blank"
            onClick={gotoHome}
            className={styles.logo}
          />

          <div className={styles.fields}>
            <p>Enter your username:</p>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              required
            />
          </div>

          <div className={styles.fields}>
            <p>Enter your password:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>

          <div className={styles.extraButtons}>
            <p className={styles.text1} onClick={gotoRegister}>
              Create an account
            </p>

            <p className={styles.text2} onClick={gotoForgotpassword}>
              Forgot password?
            </p>
          </div>

          <button type="submit" className={styles.loginButton}>
            Login
          </button>

          <div className={styles.divider}>
            <span>OR</span>
          </div>

          <div className={styles.socialButtons}>
            <button type="button" className={styles.socialButton}>
              Continue with Google
            </button>

            <button type="button" className={styles.socialButton}>
              Continue with Facebook
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
