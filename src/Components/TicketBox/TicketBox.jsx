import React, { useState } from "react";
import "./TicketBox.css";
import arrow from "../../Assets/Arrow.svg";
function TicketBox() {
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
    <div className="ticket-box">
      <div className="ticket-box-cont">
        <h1 className="tactic">Economy</h1>
        <div className="tick-col">
          <h2 className="antikor">Available Tickets</h2>
          <p className="antikor">100/200</p>
        </div>
        <div className="tick-col">
          <h2 className="antikor">Ticket Size</h2>
          <p className="antikor">$500</p>
        </div>
        <div className="tick-col">
          <h2 className="antikor">You will get</h2>
          <p className="antikor">1,666 FLYP</p>
        </div>
        <div className="tick-col">
          <h2 className="antikor">Lockup</h2>
          <p className="antikor">300 days</p>
        </div>
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
