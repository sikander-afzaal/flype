import React from "react";
import TicketBox from "../../../Components/TicketBox/TicketBox";
import "./Ticket.css";
import ticketPatt from "../../../Assets/ticket.svg";
import ticketGrid from "../../../Assets/tick-grid.svg";

function Ticket() {
  const data = [
    {
      name: "Economy",
      col: [
        {
          head: "Available Tickets",
          sub: "100/200",
        },
        {
          head: "Ticket Size",
          sub: "$500",
        },
        {
          head: "You will get",
          sub: "1,666 FYLP",
        },
        {
          head: "Lockup",
          sub: "300 days",
        },
      ],
      highlight: "#ffffff",
    },
    {
      name: "Business",
      col: [
        {
          head: "Available Tickets",
          sub: "50/200",
        },
        {
          head: "Ticket Size",
          sub: "$1,000",
        },
        {
          head: "You will get",
          sub: "8,333 FYLP",
        },
        {
          head: "Lockup",
          sub: "60 days",
        },
      ],
      highlight: "#46D7D7",
    },
    {
      name: "First Class",
      col: [
        {
          head: "Available Tickets",
          sub: "5/20",
        },
        {
          head: "Ticket Size",
          sub: "$2,500",
        },
        {
          head: "You will get",
          sub: "16,666 FYLP",
        },
        {
          head: "Lockup",
          sub: "90 days",
        },
      ],
      highlight: "#825AFF",
    },
  ];

  return (
    <div className="main-tick-cont">
      <img src={ticketGrid} className="tick-grid" alt="" />
      <div className="ticket">
        <img src={ticketPatt} className="tick-patt" alt="" />
        <h1 className="tactic title">Choose your ticket</h1>
        <div className="ticket-box-row">
          {data.map((elem, key) => {
            return (
              <TicketBox
                key={"box" + key}
                highlight={elem.highlight}
                col={elem.col}
                name={elem.name}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Ticket;
