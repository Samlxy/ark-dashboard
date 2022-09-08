import React from "react";
import "./Navbar.css";
import Search from "../../images/Vector.svg";
import Circle from "../../images/Ellipse 2.svg";
import Message from "../../images/Vector-a.svg";
import Ark from "../../images/Vector-b.svg";
import Vector from "../../images/Vector-three.svg";
import Notif from "../../images/Notification.svg";

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
          <input type="search" id="search" name="search" placeholder="Search" />
          <img
            src={Search}
            alt="search-icon"
            className="search-icon"
            style={{ width: "13px" }}
          />
        </li>

        <li className="nav-item2">
          <img src={Vector} alt="ark-icon" style={{ width: "30px" }} />
        </li>
        <li className="nav-item2">
          <img src={Message} alt="message-icon" style={{ width: "30px" }} />
        </li>
        <li className="nav-item2">
          <img src={Circle} alt="white-circle" style={{ width: "30px" }} />
          <img
            src={Notif}
            alt="nofication-icon"
            className="notification"
            style={{ width: "15px" }}
          />
        </li>
        <li className="nav-item2">
          <img src={Ark} alt="ark-icon" style={{ width: "30px" }} />
        </li>
      </ul>
    </div>
  );
}
