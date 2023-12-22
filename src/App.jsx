import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Pmesssage from "./pages/Pmessage";
import MissionVision from "./pages/Mission";
import Infrastructure from "./pages/Infrastructure";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pmessage" element={<Pmesssage />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;