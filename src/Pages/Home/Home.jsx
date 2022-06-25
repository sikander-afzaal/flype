import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
    </div>
  );
}

export default Home;
