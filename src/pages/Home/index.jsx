import React from "react";
import Slider from "../../components/Slider";
import Cards from "../../components/Cards";
import About from "../../components/About";
import Admission from "../../components/Admission";
import Differences from "../../components/Differences";
import Students from "../../components/Students";
import Diversity from "../../components/Diversity";

const Home = () => {
  return (
    <>
      <Slider />
      <Cards />
      <About />
      <Admission />
      <Differences />
      <Students />
      <Diversity />
    </>
  );
};

export default Home;
