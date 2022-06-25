import React from "react";
import TicketBox from "../../../Components/TicketBox/TicketBox";
import "./Ticket.css";

function Ticket() {
  return (
    <div className="ticket">
      <h1 className="tactic title">Choose your ticket</h1>
      <div className="ticket-box-row">
        <TicketBox />
        <TicketBox />
        <TicketBox />
      </div>
    </div>
  );
}

export default Ticket;
