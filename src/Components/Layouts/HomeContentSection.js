import React from "react";
import "../Styles/HomeContentSection.css";
import DeluxeBagel from "../Images/Bagel_Showcase1.jpg";
import SpicyMorningBagel from "../Images/Bagel_Showcase2.jpg";
import { Link } from "react-router-dom";
import ExploreCard from "../Images/card1.jpg";
import DailyDeals from "../Images/card2.jpg";
import JoinRewards from "../Images/card3.jpg";

function HomeContentSection() {
  return (
    <div className="Main-Container">
      <div className="home-best-bagel">
        <div className="overlay">
          <h1 className="bannerh1">Home of The Best Bagels</h1>

          <h2 className="bannerh2">New Selections Added</h2>
          <i className="fas fa-arrow-down"></i>
        </div>
      </div>
      <div className="signature-bagels">
        <div className="signature">
          <div
            className="col-lg-4
       m-0 p-0"
          >
            <div className="signature-container">
              <p>~New~</p>
              <p>Signature Deluxe Bagel</p>
              <button className="order-now-button">
                <Link className="order-now-link">Order Now</Link>
              </button>
            </div>
          </div>
          <div class="col-lg-8 m-0 p-0">
            <img
              src={DeluxeBagel}
              className="deluxebagel"
              alt="deluxebagelphoto"
            />
          </div>
        </div>

        <div className="signature">
          <div className="col-lg-8 m-0 p-0">
            <img
              src={SpicyMorningBagel}
              className="spicymorning"
              alt="spicy-morning-bagelphoto"
            />
          </div>
          <div class="col-lg-4 m-0 p-0">
            <div className="signature-container">
              <p>~New~</p>
              <p>Signature Deluxe Bagel</p>
              <button className="order-now-button">
                <Link className="order-now-link">Order Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="extra-section-main">
        <div className="extra-boxes-container">
          <div className="extra-boxes">
            <p className="extra-p">Explore our popular section </p>
            <img
              src={ExploreCard}
              className="extra-pic"
              alt="exploreCardphoto"
            />
            <button className="extra-find-button">
              <Link className="extra-link">Find Bagels</Link>
            </button>
          </div>
          <div className="extra-boxes">
            <p className="extra-p">Daily Deals</p>
            <img src={DailyDeals} className="extra-pic" alt="dailydealsphoto" />
            <button className="extra-find-button">
              <Link className="extra-link">Find Deals</Link>
            </button>
          </div>
          <div className="extra-boxes">
            <p className="extra-p">Join our Rewards Program </p>
            <img
              src={JoinRewards}
              className="extra-pic"
              alt="joinrewardsphoto"
            />
            <button className="extra-find-button">
              <Link className="extra-link">Join Program</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeContentSection;
