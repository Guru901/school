import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Footer from "./components/Footer";
import Pmesssage from "./pages/Pmessage";
import Dmesssage from "./pages/Dmessage";
import MissionVision from "./pages/Mission";
import Infrastructure from "./pages/Infrastructure";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  document.addEventListener("mousemove", (dets) => {
    const cur = document.querySelector(".cur");
    cur.style.left = dets.pageX + "px";
    cur.style.top = dets.pageY + "px";
  });

  return (
    <>
      <div className="cur"></div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pmessage" element={<Pmesssage />} />
          <Route path="/dmessage" element={<Dmesssage />} />
          <Route path="/mission" element={<MissionVision />} />
          <Route path="/infrastructure" element={<Infrastructure />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
