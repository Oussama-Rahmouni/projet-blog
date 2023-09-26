import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Acceuille from "../../pages/home/Acceuille";
import AboutUs from "../../pages/about/AboutUs";
import UserProfile from "../../pages/profile/UserProfile";
import Inscription from "../../pages/auth/Inscription";
import Login from "../../pages/auth/Login";

function AppRoute() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Acceuille />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Inscription />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/UserProfile" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoute;
