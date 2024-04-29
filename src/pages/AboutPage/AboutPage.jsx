import React from "react";
import "./abou.css";

export default function AboutPage() {
  return (
    <div className="about">
      <div className="aboutContainer">
        <div className="about1">
          <h1>About as</h1>
        </div>
        <div className="about2">
          <div className="paragraphs">
            <p>
              We’re a small team who are all sharing a mutual passion for web
              development, WordPress, and online business.
              <p>
                {" "}
                Our step-by-step website building guides have helped thousands
                of people since 2014.
              </p>
              Most of our content is in a long-form step-by-step format.
              Although we are a small team, we try to keep all of our 300+
              guides, tutorials, reviews, and comparisons up to date.
            </p>
          </div>
          <div className="images">
            <img src="./assets/carlos-muza-hpjSkU2UYSU-unsplash.jpg" alt="" />
          </div>
        </div>
        <div className="about3">
          <img src="'./assets/facebook.png" alt="" />
          <img src="./assets/instagram.png" alt="" />
          <img src="./assets/linkedin.png" alt="" />
          <img src="./assets/tik-tok.png" alt="" />
          <img src="./assets/twitter.png" alt="" />
        </div>
      </div>
    </div>
  );
}
