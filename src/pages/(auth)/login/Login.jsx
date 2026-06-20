import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = {
      email,
      password,
    };

    if (!email.trim()) {
      setError("Email is required");
      setLoading(false);
      return;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      setLoading(false);
      return;
    }

    if (!password.trim()) {
      setError("Password is required");
      setLoading(false);
      return;
    }

    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      setLoading(false);
      return;
    }

    console.log(formData);

    setLoading(true);

    navigate("/");
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 style={{ fontSize: "32px", lineHeight: "3px" }}>
          {" "}
          Hey, what's due today? 👀
        </h1>

        <p style={{ lineHeight: "1px" }}> Don't forget your assignments </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Email</label>
        <input
          type="email"
          placeholder="you@gmail.com"
          className={styles.input}
          style={{ maxWidth: "365px" }}
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

        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="**********"
            className={styles.input}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <span
            onClick={() => setShowPassword((prev) => !prev)}
            className={styles.eyeIcon}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <button disabled={loading} className={styles.button}>
          {loading ? "Logging in....." : "Jump in"}{" "}
        </button>

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

      {error && <p className={styles.error}>{error}</p>}

      <p>
        {" "}
        New here? <a href="/register"> Join the group </a>
      </p>
    </main>
  );
};

export default Login;
