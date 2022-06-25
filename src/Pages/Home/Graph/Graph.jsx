import React from "react";
import "./Graph.css";
import graph from "../../../Assets/graph.png";
import graphPatt from "../../../Assets/graph-patt.svg";
import NftRow from "../../../Components/NftRow/NftRow";
function Graph() {
  const rowData = [
    {
      first: true,
      head: "PRE SEED - 27/06/2021",
      sub: "SOLD OUT",
      col: [
        {
          head: "Price",
          desc: "$0.0505",
        },
        {
          head: "Token Allocation",
          desc: "9.9M FLYP",
        },
        {
          head: "Total Sales",
          desc: "$500K",
        },
      ],
    },
    {
      head: "PRIVATE  - 11/07/2022",
      sub: "OPEN SOON",
      col: [
        {
          head: "Price",
          desc: "$0.20",
        },
        {
          head: "Token Allocation",
          desc: "1.7M FLYP",
        },
        {
          head: "FDV",
          desc: "$20M",
        },
        {
          head: "Total Sales",
          desc: "up-to $340K",
        },
      ],
    },
  ];
  return (
    <div className="graph">
      <img src={graphPatt} alt="" className="graph-patt" />
      <h1 className="title tactic">Token Metrics</h1>
      <div className="graph-div">
        <div className="left-graph">
          <div className="info-box desktop-info">
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
          <div className="info-box mob-info">
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
          <img src={graph} alt="" />
        </div>
      </div>
      {rowData.map((elem, key) => {
        return (
          <NftRow
            first={elem?.first}
            key={"row" + key}
            head={elem.head}
            sub={elem.sub}
            col={elem.col}
          />
        );
      })}
      <p className="note-nft antikor">
        The first 72 hours of the private sale will be open to MULTI-PASS NFT
        holders only with an additional discount of 25% ($0.15).
      </p>
      <button className="whitelist pop choose-btn">choose your ticket</button>
    </div>
  );
}

export default Graph;
