import React from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const gotoHome = () => navigate("/");

  const gotoAbout = () => navigate("/about");

  const gotoContact = () => navigate("/contact");

  const gotoLogin = () => navigate("/login");

  const gotoSignup = () => navigate("/signup");

  return (
    <main className={styles.main}>
      <img
        className={styles.image}
        src="./images/logo.svg"
        alt="_blank"
        onClick={gotoHome}
      />

      <buttons className={styles.buttons}>
        <p className={styles.pageButton} onClick={gotoAbout}>
          About Us
        </p>
        <p className={styles.pageButton} onClick={gotoContact}>
          Contact
        </p>
        <button className={styles.login} onClick={gotoLogin}>
          Login
        </button>
        <button className={styles.register} onClick={gotoSignup}>
          Signup
        </button>
      </buttons>
    </main>
  );
};

export default Navbar;
