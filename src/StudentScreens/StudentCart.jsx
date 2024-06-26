import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
// import Navbar from "../component/navbar.jsx";
import Footer from "./Footer.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBell,
  faSearch,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";
import cart from "../images/shopping-cart.png";
import ITimage from "../images/IT&Software.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import design from "../images/design.png";
import development from "../images/development.png";
import marketing from "../images/marketing.png";
import Cartnav from "../component/cartnav.jsx";

const StudentCart = () => {
  return (
    <div>
      <Cartnav />
      <div className="cart-container">
        <div className="cart-card">
          <img className="cart-image" src={cart} alt="shopping cart"></img>
          <p>Your Cart Is Empty</p>
          <button className="cart-btn" type="submit">
            Buy a Course
          </button>
        </div>
        <div className="cart-saved-courses">
          <h3>Saved Courses</h3>
          <div className="saved-card-row1">
            <div className="saved-card">
              <img className="it-image" src={ITimage} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-price">IT & SOFTWARE</p>
                <p className="saved-price">&#8358;3,500</p>
              </div>
              <h6>Learn Python Programming Matsreclass</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={design} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceD">Design</p>
                <p className="saved-price">&#8358;3,500</p>
              </div>
              <h6>Complete Website Responsive Design</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={development} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceDE">Development</p>
                <p className="saved-price">&#8358;3,500</p>
              </div>
              <h6>Adobe Premiere Pro CC Advanced Training Course</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.6</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>236,568</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="saved-card">
              <img className="it-image" src={marketing} alt="IT"></img>
              <div className="saved-title-text">
                <p className="saved-text-priceM">Marketing</p>
                <p className="saved-price">&#8358;3,500</p>
              </div>
              <h6>Ultimate AWS Certified Solutions Architect Associate 2021</h6>
              <div className="saved-user">
                <div className="saved-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.</p>
                </div>
                <div className="saved-user-count">
                  <img src={user} alt="user" />
                  <p>511,123</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default StudentCart;
