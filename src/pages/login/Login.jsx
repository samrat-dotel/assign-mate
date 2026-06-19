import React from "react";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <main className={styles.main}>
      <div className={styles.title}>logo h1 p</div>

      <form action="/submit" method="post"></form>

      <p>
        {" "}
        New here? <a href="/register"> Join the group </a>
      </p>
    </main>
  );
};

export default Login;
