import React from "react";
import "./About.css";
import patt from "../../../Assets/about-patt.svg";
function About() {
  return (
    <div className="about">
      <img src={patt} alt="" />
      <h1 className="tactic">Special VCs-only rates</h1>
      <p className="antikor">
        Pre-launch token private sales are usually open to VCs only, and are not
        revealed to the general public.
      </p>
      <p className="antikor">
        Flype, however, believes a private sale shouldn't be restricted to VC’s
        only, so we have earmarked a part of the VC’s allocation for the first
        members of the Flype community.
      </p>
    </div>
  );
}

export default About;
