import React from "react";
import "./Main.css";

export default function Main() {
  return (
    <div className="main-container">
      <div className="aside-menu">
        <div className="toggle">
          <span className="patronise">Patronise</span>
          <span className="bid">Bid</span>
        </div>
        <div className="services">
          <p className="category"><strong>My Categories</strong></p>
          <p>Other-Admin Support</p>
          <p>Personal/Virtual Assistant</p>
          <p>Web Research</p>
          <p>Pro</p>

          <p className="category"><strong>Visibility</strong></p>
          <p>Other-Admin Support</p>
          <p>Virtual Assistant</p>

          <p className="category"><strong>Availability</strong></p>
          <p>Other-Admin Support</p>
          <p>Personal/Virtual Assistant</p>
          <p>Pro</p>
        </div>
      </div>
      
      <div className="main">
      <input type="search" id="request" name="request" placeholder="Search Request"/>
      </div>
    </div>
  );
}

