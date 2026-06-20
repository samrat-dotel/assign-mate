import React, { useState } from "react";
import styles from "./Login.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <img
          src="./images/mini_logo.svg"
          alt="_blank"
          width="80px"
          height="auto"
        />

        <h1 style={{ fontSize: "32px", lineHeight: "3px" }}>
          {" "}
          Hey, what's due today? 👀
        </h1>

        <p style={{ lineHeight: "1px" }}> Don't forget your assignments </p>
      </div>

      <form className={styles.form} action="/submit" method="post">
        <label className={styles.label}>Email</label>
        <input
          type="email"
          placeholder="you@gmail.com"
          className={styles.input}
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label className={styles.label}>Password</label>
          <a className={styles.link} href="/forgetPassword">
            Forgot password?
          </a>
        </div>
        <input
          type="password"
          placeholder="**********"
          className={styles.input}
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className={styles.button}> Jump in </button>

        <div className={styles.divider}>or Login with</div>

        <div className={styles.media} onClick={null}>
          <div className={styles.icon}>
            <FcGoogle />
            <p>Google</p>
          </div>

          <div className={styles.icon} onClick={null}>
            <FaFacebook style={{ color: "blue" }} />
            <p>Facebook</p>
          </div>
        </div>
      </form>

      <p>
        {" "}
        New here? <a href="/register"> Join the group </a>
      </p>
    </main>
  );
};

export default Login;
