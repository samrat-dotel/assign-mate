import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/(auth)/login/Login";
import Signup from "./pages/(auth)/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import ForgetPassword from "./pages/(auth)/forget-password/ForgetPassword";
import About from "./pages/(general)/about/About";
import Contact from "./pages/(general)/contact/Contact";
import Home from "./pages/(general)/home/Home";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import { MdDarkMode, MdOutlineDarkMode } from "react-icons/md";
import "./App.css";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");

    if (darkMode) {
      document.documentElement.classList.add("dark-mode");
    } else {
      document.documentElement.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div
      style={{
        backgroundColor: "var(--color-bg1)",
      }}
    >
      <button onClick={() => setDarkMode(!darkMode)} className="darkMode">
        {darkMode ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        <Route path="/" element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />

          <Route path="/register" element={<Signup />} />

          <Route path="/forgetpassword" element={<ForgetPassword />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
