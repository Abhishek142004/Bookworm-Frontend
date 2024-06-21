import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousal from "./Home/Carousal";
import Trending from "./Home/Trending";
import Review from "./Home/Review";
import Info from "./Home/Info";
import Hero from "./Home/Hero";

const Home = () => {
  return (
    <div>
      <Carousal />
      <Trending />
      <Hero />
      <Review />
      <Info />
    </div>
  );
};

export default Home;
