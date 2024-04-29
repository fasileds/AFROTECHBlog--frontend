import React from "react";
import "./myblog.css";
import { Link } from "react-router-dom";

export default function MyBlog() {
  return (
    <div className="myblog">
      <Link
        to="/singleBlog"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="mybologImage">
          <img
            src="./assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
            alt=""
            className="myblImage"
          />
        </div>
        <div className="myblogText">
          <h3 className="myBlogTotle"> the title of the blog </h3>
          <div className="mydescription">
            <span className="mydesc">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </span>
          </div>

          <div className="myothers">
            <Link
              to="/singleBlog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button>Read More</button>
            </Link>
            <div className="myedButton">
              <Link to="/createBlog">
                <button>Edit</button>
              </Link>
              <button>Delate</button>
            </div>
            <span>owner of the blog</span>
            <span>4-24-2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
