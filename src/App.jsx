import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import Dashboard from "./pages/dashboard/Dashboard";
import ForgetPassword from "./pages/forget-password/ForgetPassword";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route path="/" element={<Home />} />
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
      </BrowserRouter>
    </div>
  );
};

export default App;
