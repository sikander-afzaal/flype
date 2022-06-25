import React from "react";
import "./Graph.css";
import graph from "../../../Assets/graph.png";
import graphPatt from "../../../Assets/graph-patt.svg";
function Graph() {
  return (
    <div className="graph">
      <img src={graphPatt} alt="" className="graph-patt" />
      <h1 className="title tactic">Token Metrics</h1>
      <div className="graph-div">
        <div className="left-graph">
          <div className="info-box">
            <h2 className="tactic">Token Info</h2>
            <div className="grid-info">
              <div className="info-col">
                <h3 className="antikor">Token</h3>
                <p className="antikor">FLYPE DAO</p>
              </div>
              <div className="info-col">
                <h3 className="antikor">Symbol</h3>
                <p className="antikor">FLYP</p>
              </div>
              <div className="info-col">
                <h3 className="antikor">Type</h3>
                <p className="antikor">Utility</p>
              </div>
              <div className="info-col">
                <h3 className="antikor">Total Supply</h3>
                <p className="antikor">100M</p>
              </div>
            </div>
          </div>
          <div className="key-box">
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">51% Community</p>
            </div>
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">3.7% Private/ Pre sale</p>
            </div>
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">9.9% Core Team</p>
            </div>
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">9.9% Pre Seed</p>
            </div>
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">8.8% Strategic</p>
            </div>
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">2.2% Public Sale</p>
            </div>
            <div className="key">
              <div className="p-box"></div>
              <p className="tactic">14.5% Treasury</p>
            </div>
          </div>
        </div>
        <div className="right-graph">
          <img src={graph} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Graph;
