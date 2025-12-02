import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
