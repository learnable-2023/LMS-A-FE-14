import React from "react";
import "../App.css";
import "./StudentSavedCourse.css";
import "./Studentschool.css";
import firstimage from "../images/firstimage.png.png";
import business from "../images/business.png";
import Agriculture from "../images/Agriculture (2).png";
import art from "../images/art.png";
import first from "../images/first.png";
import second from "../images/second.png";
import third from "../images/third.png";
import fourth from "../images/fourth.png";
import fifth from "../images/fifth.png";
import sixth from "../images/sixth.png";
import seventh from "../images/seventh.png";
import eight from "../images/eight.png";
import star from "../images/Star .png";
import user from "../images/User.svg";
import Navbar from "../component/navbar";
import Footer from "./Footer";

const Studentschool = () => {
  return (
    <div>
      <div className="second-general-container">
        <Navbar />

        <div className="home-top-text">
          <div className="second-first-header">
            <h5>Categories</h5>
          </div>
          <div className="second-first-row1">
            <img
              className="first-image"
              src={firstimage}
              alt="Technology"
            ></img>
            <img className="first-image" src={business} alt="Business"></img>
            <div className="first-image-box">
              <img
                className="first-image"
                src={Agriculture}
                alt="Agriculture"
              ></img>
              <img className="first-image" src={art} alt="Art"></img>
            </div>
          </div>
        </div>

        <div className="second-course-main-container">
          <h5>Top Picks for you</h5>
          <div className="second-card-row1">
            <div className="second-card">
              <img className="it-image" src={first} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-price">IT & SOFTWARE</p>
                <p className="second-price">$35</p>
              </div>
              <h6>Learn Python Programming Masterclass</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.0</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>211,434</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={second} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceD">Design</p>
                <p className="second-price">$49</p>
              </div>
              <h6>User Experience course for beginners</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.9</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={third} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceDE">Developments</p>
                <p className="second-price">$32</p>
              </div>
              <h6>Adobe Premiere Pro CC Advanced Training Course</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.6</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>236,568</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={fourth} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceM">Marketing</p>
                <p className="second-price">$13</p>
              </div>
              <h6>Ultimate AWS Certified Solutions Architect Associate 2021</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.1</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>511,123</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>

          <div className="second-card-row1">
            <div className="second-card">
              <img className="it-image" src={fifth} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceD">Design</p>
                <p className="second-price">$9</p>
              </div>
              <h6>
                Ultimate Google Ads Training 2020: Profit with Pay Per Click
              </h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.1</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>154,817</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={sixth} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-price">IT & SOFTWARE</p>
                <p className="second-price">$35</p>
              </div>
              <h6>Learn Ethical Hacking From Scratch 2021</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.8</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>451,444</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={seventh} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceDE">Development</p>
                <p className="second-price">$16</p>
              </div>
              <h6>Angular - The Complete Guide (2021 Edition)</h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.3</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>197,637</p>
                  <span>students</span>
                </div>
              </div>
            </div>

            <div className="second-card">
              <img className="it-image" src={eight} alt="IT"></img>
              <div className="second-title-text">
                <p className="second-text-priceM">Marketing</p>
                <p className="second-price">$23</p>
              </div>
              <h6>
                How to get Diamond in soloQ | League of Legends | Season 11
              </h6>
              <div className="second-user">
                <div className="second-star-left">
                  <img src={star} alt="star"></img>
                  <p>4.7</p>
                </div>
                <div className="second-user-count">
                  <img src={user} alt="user" />
                  <p>435,671</p>
                  <span>students</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Studentschool;