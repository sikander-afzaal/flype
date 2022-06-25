import React from "react";
import "./NftRow.css";
function NftRow({ sub, head, col, first }) {
  return (
    <div className="nft-row">
      <div className={`top-row ${first ? "first-top-row" : ""}`}>
        <h1 className="tactic">{head}</h1>
        <p className="tactic">{sub}</p>
      </div>
      <div className="bottom-row">
        {col.map((elem, key) => {
          return (
            <div key={"row-col" + key + new Date()} className="row-col">
              <p className="antikor">{elem.head}</p>
              <h2 className="tactic">{elem.desc}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NftRow;
