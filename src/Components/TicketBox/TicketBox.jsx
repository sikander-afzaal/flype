import React, { useState } from "react";
import "./TicketBox.css";
import arrow from "../../Assets/Arrow.svg";
function TicketBox({ highlight, name, col }) {
  const [drop, setDrop] = useState(false);
  const [val, setVal] = useState(1);
  const dropHandler = () => {
    setDrop((prev) => !prev);
  };
  const valHandler = (e) => {
    setVal(e.target.innerText);
    setDrop(false);
  };
  return (
    <div className="ticket-box" style={{ "--button-bg": highlight }}>
      <div className="ticket-box-cont">
        <h1 className="tactic">{name}</h1>
        {col.map((elem, key) => {
          return (
            <div className="tick-col" key={"col" + key}>
              <h2 className="antikor">{elem.head}</h2>
              <p className="antikor">{elem.sub}</p>
            </div>
          );
        })}
        <div className="tick-col-drop">
          <h2 className="antikor">Tickets</h2>
          <div className="drop-down">
            <p className="main-drop antikor" onClick={dropHandler}>
              {val}
              <span>
                <img src={arrow} alt="" />
              </span>
            </p>
            <div className={`drop-down-options ${drop ? "display" : ""}`}>
              <p className="option antikor" onClick={valHandler}>
                2
              </p>
              <p className="option antikor" onClick={valHandler}>
                3
              </p>
              <p className="option antikor" onClick={valHandler}>
                4
              </p>
              <p className="option antikor" onClick={valHandler}>
                5
              </p>
            </div>
          </div>
        </div>
        <button className="whitelist tick-white pop">Claim</button>
      </div>
    </div>
  );
}

export default TicketBox;
