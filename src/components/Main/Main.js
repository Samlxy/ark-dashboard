import React from "react";
import "./Main.css";
import Search from "../../images/Search.svg";
import Like from "../../images/like.svg";
import Love from "../../images/love.svg";
import Check from "../../images/check.svg";
import Stars from "../../images/Star.svg";
import Dollars from "../../images/dollars.svg";
import Location from "../../images/location.svg";

export default function Main() {
  return (
    <div className="main-container">
      <div className="aside-menu">
        <div className="toggle">
          <span className="patronise">Patronise</span>
          <span className="bid">Bid</span>
        </div>
        <div className="services">
          <p className="category">
            <strong>My Categories</strong>
          </p>
          <p>Other-Admin Support</p>
          <p>Personal/Virtual Assistant</p>
          <p>Web Research</p>

          <p className="category">
            <strong>Visibility</strong>
          </p>
          <p>Worldwide Access</p>
          <p>Remote Location</p>
          <p>Hybrid Roles</p>

          <p className="category">
            <strong>Availability</strong>
          </p>
          <p>Fulltime On-Demand</p>
          <p>Part-time Schedule</p>

          <p className="category">
            <strong>Inventory</strong>
          </p>
          <p>Daily Log Readings</p>
          <p>Database Syncing</p>
        </div>
      </div>

      <div className="main">
        <div className="search-div">
          <span>
            <input
              type="search"
              id="request"
              name="request"
              placeholder="Search Request"
            />
          </span>
          <span className="search-box">
            <img
              src={Search}
              alt="search-icon"
              className="search-icon2"
              style={{ width: "13px" }}
            />
          </span>
        </div>
        <div className="ad-search">
          <strong>Advanced Search</strong>
        </div>
        <div className="ad-search">
          <span className="">
            <strong>Sort</strong>
          </span>
          <span className="sort-row">Best Match</span>
          <span className="sort-row">Most Recent</span>
        </div>
        <div className="card">
          <div className="card-cont">
            <div className="card-header">
              <span>
                Need a graphic designer who can handle my social media
              </span>
              <span className="reaction">
                <img src={Like} alt="love-icon" style={{ width: "17px" }} />
              </span>
              <span className="reaction">
                <img src={Love} alt="love-icon" style={{ width: "17px" }} />
              </span>
            </div>
            <p className="card-text">
              <strong>Hourly: $20.00-$30.00</strong> - intermediate - Est. Time:
              Less than 1 month, Less than 30 hrs/week - Posted 1 hour ago
            </p>
            <p className="card-text">
              I have a page called blurry_cosmos I want someone who can manage
              my account. I need a graphic designer and also creative.
            </p>
            <div className="label">
              <span className="cols">Instagram</span>
              <span className="cols">Social Media Imagery</span>
              <span className="cols">Graphic Design</span>
              <span className="cols">Adobe Photoshop</span>
            </div>

            <p className="proposals">Proposals: Less than 5</p>
            <div className="payments">
              <span className="check">
                <img src={Check} alt="check-icon" style={{ width: "10px" }} />
              </span>
              <span className="verify">Payment unverified</span>
              <span className="verify">
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
              </span>
              <span className="verify">
                <img
                  src={Dollars}
                  alt="check-icon"
                  className="dollars"
                  style={{ width: "70px", position: "relative", top: "5px" }}
                />
              </span>
              <span className="verify">
                <img
                  src={Location}
                  alt="check-icon"
                  style={{ width: "10px" }}
                />
                &nbsp;&nbsp;&nbsp;India
              </span>
            </div>
          </div>
          <hr className="divider" />
          <div className="card-cont">
            <div className="card-header">
              <span>
                Need a frontend developer to build an E-commerce store
              </span>
              <span className="reaction">
                <img src={Like} alt="love-icon" style={{ width: "17px" }} />
              </span>
              <span className="reaction">
                <img src={Love} alt="love-icon" style={{ width: "17px" }} />
              </span>
            </div>
            <p className="card-text">
              <strong>Hourly: $30.00-$30.00</strong> - intermediate - Est. Time:
              Less than 1 month, Less than 30 hrs/week - Posted 3 hour ago
            </p>
            <p className="card-text">
              I have a page called blurry_cosmos I want someone who can manage
              my account. I need a graphic designer and also creative.
            </p>
            <div className="label">
              <span className="cols">React</span>
              <span className="cols">Frontend</span>
              <span className="cols">Web developer</span>
              <span className="cols">HTML</span>
              <span className="cols">CSS</span>
              <span className="cols">Javascript</span>
              <span className="cols">Bootstrap</span>
            </div>

            <p className="proposals">Proposals: Less than 10</p>
            <div className="payments">
              <span className="check">
                <img src={Check} alt="check-icon" style={{ width: "10px" }} />
              </span>
              <span className="verify">Payment verified</span>
              <span className="verify">
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
                <img src={Stars} alt="check-icon" style={{ width: "15px" }} />
              </span>
              <span className="verify">
                <img
                  src={Dollars}
                  alt="check-icon"
                  className="dollars"
                  style={{ width: "70px", position: "relative", top: "5px" }}
                />
              </span>
              <span className="verify">
                <img
                  src={Location}
                  alt="check-icon"
                  style={{ width: "10px" }}
                />
                &nbsp;&nbsp;&nbsp;Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
