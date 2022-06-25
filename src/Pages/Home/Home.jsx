import React from "react";
import About from "./About/About";
import Graph from "./Graph/Graph";
import Hero from "./Hero/Hero";
import "./Home.css";
import Ticket from "./Ticket/Ticket";
function Home() {
  return (
    <div className="home">
      <Hero />
      <About />
      <Ticket />
      <Graph />
    </div>
  );
}

export default Home;
