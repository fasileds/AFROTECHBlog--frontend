import React from "react";
import "./contact.css";

export default function ContactPage() {
  return (
    <div className="contactas">
      <div className="contactContainer">
        <div className="contactLeft">
          <form action="">
            <input placeholder="fasiledes@gmail.com" type="email" />
            <input placeholder="your name" type="text" />
            <textarea name=" put your coment here" id="" cols="30" rows="10">
              put your comment in here
            </textarea>
            <button>Submitte</button>
          </form>
        </div>
        <div className="contactRight">
          <img
            className="contactimage"
            src="/assets/micheile-henderson-ZVprbBmT8QA-unsplash.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
