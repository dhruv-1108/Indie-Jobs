import React from "react";
import SignUp from "./components/SignUp/SignUp";
import NavBar from "./components/NavBar/NavBar";
import AboutUs from "./components/AboutUs/AboutUs";
import Home from './components/Home/Home'
import Mission from "./components/Mission/Mission";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <NavBar />  

        <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="contact" element={<SignUp />} />
            <Route path="mission" element={<Mission />} />
        </Routes>
    </BrowserRouter>
);
}

