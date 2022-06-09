import React from "react";
import netflix_logo from "./images/netflix_logo.png";
// import video from "././videos/video.mp4"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import './App.css'
// import * as Scroll from "react-scroll";

function App() {
  return (
    <div>
      <div className="homePage">
        <div className="group">
          <div className="navbar">
            <img className="netflix" src={netflix_logo} alt="egg" />
            <button className="signin">Sign In</button>
          </div>
          <div className="container">
            <span className="words">
              <h1 className="homepage1">
                Unlimited movies, TV <br /> shows, and more
              </h1>
              <h2 className="homepage2">Watch anywhere. Cancel anytime</h2>
              <h3 className="homepage3">
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <input
                id="box"
                type={"text"}
                value={""}
                placeholder="Email address"
              />
              <button className="getSbtn">
                {" "}
                Get Started <FontAwesomeIcon icon="fa-regular fa-angle-right" />
              </button>
            </span>
          </div>
        </div>

        <div className="nextslide">
          <div className="house1">
            <h1>Enjoy on your TV</h1>
            <h2>
              Watch on Smart TVs, Playstation, Xbox, <br /> Chromecast, AppleTV,
              Blu-ray players, and <br /> more
            </h2>
          </div>
          <img
            className="tv"
            src={
              "https://media3.giphy.com/media/Sb7WSbjHFNIL6/giphy.gif?cid=ecf05e47dc0gt2cy13zyoptyjkavvof45jt80k0bxowoj0c1&rid=giphy.gif&ct=g"
            }
            alt="tv"
          />
        </div>

        <div className="nextslide">
          <img
            className="downloadgif"
            src={
              "https://media3.giphy.com/media/Sb7WSbjHFNIL6/giphy.gif?cid=ecf05e47dc0gt2cy13zyoptyjkavvof45jt80k0bxowoj0c1&rid=giphy.gif&ct=g"
            }
            alt="tv"
          />
          <div>
            <h1>Download your shows to watch offline</h1>
            <h2>
              Save your favourite easily and always have <br /> something to
              watch
            </h2>
          </div>
        </div>

        <div className="nextslide">
          <div>
            <h1>Watch Everywhere</h1>
            <h2>
              Stream unlimited movies and tv shows on <br /> your phone, laptop
              and TV
            </h2>
          </div>
        </div>

        <div className="nextslide">
          <img className="tv"
            src={
              "https://media3.giphy.com/media/Sb7WSbjHFNIL6/giphy.gif?cid=ecf05e47dc0gt2cy13zyoptyjkavvof45jt80k0bxowoj0c1&rid=giphy.gif&ct=g"
            }
            alt="tv"
          />
          <div>
            <h1>Create profiles for kids</h1>
            <h2>
              Send kids on adventures with their favorite <br /> characters in a
              space made just for them—free <br />
              with your membership
            </h2>
          </div>
        </div>

        <footer className="nextslide">
          <div className="footer">
          <h3>Questions? Contact Us</h3>
          
          <ul type="none">
            <li>FAQ</li>
            <li>Investor relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </ul>

          <ul type="none">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Prefrences</li>
            <li>Legal Notice</li>
          </ul>

          <ul type="none">
            <li>Accounts</li>
            <li>Ways to Watch</li>
            <li>Corprate Information</li>
            <li>Only on Netflix</li>
          </ul>

          <ul type="none">
            <li>Media Center</li>
            <li>Terms of Use</li>
            <li>Contact Us</li>
          </ul>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;

// use border bottom solid 2px
