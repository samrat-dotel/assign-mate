import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../auth.module.css";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaEye, FaEyeSlash } from "react-icons/fa";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    const formData = {
      fullName,
      email,
      password,
      confirmPassword,
    };

    // Validation
    if (!fullName.trim()) {
      setError("Full name is required");
      setLoading(false);
      return;
    }

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

    if (confirmPassword !== password) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    console.log(formData);

    setLoading(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <main className={styles.main}>
      <div className={styles.title}>
        <h1 style={{ fontSize: "3rem", lineHeight: "3px" }}>
          Join AssignMate 🚀
        </h1>
        <p style={{ lineHeight: "1px" }}>
          Your digital living room for getting things done
        </p>
      </div>

      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label}>Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className={styles.input}
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <label className={styles.label}>Email</label>
        <input
          type="email"
          placeholder="you@gmail.com"
          className={styles.input}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className={styles.passwords}>
          <div className={styles.passwordField}>
            <label className={styles.label}>Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="**********"
                className={styles.input}
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
          </div>

          <div className={styles.passwordField}>
            <label className={styles.label}>Confirm Password</label>
            <div className={styles.passwordWrapper}>
              <input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="**********"
                className={styles.input}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span
                onClick={() => setShowConfirmPassword((prev) => !prev)}
                className={styles.eyeIcon}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>
        </div>

        <button disabled={loading} className={styles.button}>
          {loading ? "Creating account..." : "Create Account"}
        </button>

        <div className={styles.divider}>or Sign up with</div>

        <div className={styles.media}>
          <div className={styles.icon}>
            <FcGoogle />
            <p>Google</p>
          </div>

          <div className={styles.icon}>
            <FaFacebook style={{ color: "blue" }} />
            <p>Facebook</p>
          </div>
        </div>
      </form>

      {error && <p className={styles.error}>{error}</p>}

      <p className={styles.text}>
        Already have an account? <a href="/login">Log in</a>
      </p>
    </main>
  );
};

export default Signup;
