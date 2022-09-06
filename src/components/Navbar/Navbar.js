import React from "react";
import "./Navbar.css";
import Circle from "../../images/Ellipse 2.svg";
import Message from "../../images/Vector-a.svg";
import Ark from "../../images/Vector-b.svg";
import Vector from "../../images/Vector-three.svg";


export default function Navbar() {
  return (
    <div id="nav-bar">
      <ul className="nav nav2">
        <li className="nav-item">Ark</li>
        <li className="nav-item">Asset</li>
        <li className="nav-item">Account</li>
      </ul>

      <ul className="nav2">
        <li className="search">
          <input type="search" id="search" name="search" placeholder="Search"/>
        </li>

        <li className="nav-item2">
          <img src={Vector} alt="ark-icon" style={{ width: "30px" }} />
        </li>
        <li className="nav-item2">
          <img
            src={Message}
            alt="notification-icon"
            style={{ width: "30px" }}
          />
        </li>
        <li className="nav-item2">
          <img src={Circle} alt="ark-icon" style={{ width: "30px" }} />
        </li>
        <li className="nav-item2">
          <img src={Ark} alt="ark-icon" style={{ width: "30px" }} />
        </li>
      </ul>
    </div>
  );
}
