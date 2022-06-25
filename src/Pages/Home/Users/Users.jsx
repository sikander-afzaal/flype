import React from "react";
import "./Users.css";
import patt from "../../../Assets/user-patt.svg";
function Users() {
  return (
    <div className="users">
      <img src={patt} alt="" className="user-patt" />
      <div className="user-col">
        <h1 className="tactic">10,000+</h1>
        <p className="antikor">Testnet Users</p>
      </div>
      <div className="user-col">
        <h1 className="tactic">30,000+</h1>
        <p className="antikor">Transactions on Tesnet</p>
      </div>
      <div className="user-col">
        <h1 className="tactic">20K+</h1>
        <p className="antikor">Community members</p>
      </div>
    </div>
  );
}

export default Users;
