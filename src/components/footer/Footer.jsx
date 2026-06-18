import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";
import {
  FaSquareFacebook,
  FaSquareInstagram,
  FaSquareXTwitter,
} from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";

const Footer = () => {
  const navigate = useNavigate();

  const gotoHome = () => navigate("/");

  const gotoAbout = () => navigate("/about");

  const gotoContact = () => navigate("/contact");

  return (
    <main className={styles.hero}>
      <div className={styles.main}>
        <div className={styles.description}>
          <img
            src="./images/mini_logo.svg"
            alt="_blank"
            className={styles.image}
          />

          <div className={styles.text}>
            <p className={styles.text}>
              AssignMate is a simple assignment management platform that helps
              students organize tasks, track deadlines, and stay productive.
            </p>

            <p className={styles.text}>
              With an intuitive interface and easy-to-use tools, AssignMate
              allows users to manage assignments efficiently, monitor their
              progress, and never miss important submission dates.
            </p>
          </div>
        </div>

        <div className={styles.container}>
          <div className={styles.quickLinks}>
            <p className={styles.name}>Quick Links</p>

            <buttons className={styles.buttons}>
              <p className={styles.button} onClick={gotoHome}>
                Home
              </p>
              <p className={styles.button} onClick={gotoAbout}>
                About
              </p>
              <p className={styles.button} onClick={gotoContact}>
                Contact Us
              </p>
            </buttons>
          </div>

          <div className={styles.socialMedia}>
            <p className={styles.name}>Social Media</p>

            <div className={styles.icons}>
              <a href="https://facebook.com" target="blank">
                <FaSquareFacebook className={styles.icon} />
              </a>
              <a href="https://instagram.com" target="blank">
                <FaSquareInstagram className={styles.icon} />
              </a>
              <a href="https://x.com" target="blank">
                <FaSquareXTwitter className={styles.icon} />
              </a>
              <a href="https://tiktok.com" target="blank">
                <AiFillTikTok className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className={styles.copyright}>
          © {new Date().getFullYear()} AssignMate. All rights reserved.
        </p>
      </div>
    </main>
  );
};

export default Footer;
