import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setIsOpen(false);
  };

  const gotoHome = () => navigate("/");

  const [isOpen, setIsOpen] = useState(false);

  return (
    <main className={styles.main}>
      <img
        className={styles.image}
        src="./images/logo.svg"
        alt="_blank"
        onClick={gotoHome}
      />

      <div
        className={`${styles.hamburger} ${isOpen ? styles.active : ""}`}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`${styles.buttons} ${isOpen ? styles.active : ""}`}>
        <p
          className={styles.pageButton}
          onClick={() => handleNavigate("/about")}
        >
          About Us
        </p>
        <p
          className={styles.pageButton}
          onClick={() => handleNavigate("/contact")}
        >
          Contact
        </p>

        <p className={styles.login} onClick={() => handleNavigate("/login")}>
          Login
        </p>
        <p
          className={styles.register}
          onClick={() => handleNavigate("/signup")}
        >
          Signup
        </p>
      </div>
    </main>
  );
};

export default Navbar;
