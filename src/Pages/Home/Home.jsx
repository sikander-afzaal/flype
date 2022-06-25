import React from "react";
import About from "./About/About";
import Hero from "./Hero/Hero";
import "./Home.css";
import Ticket from "./Ticket/Ticket";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Ticket />
    </div>
  );
}

export default Home;
