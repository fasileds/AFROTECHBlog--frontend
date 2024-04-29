import React from "react";
import "./blog.css";
import { Link } from "react-router-dom";

export default function Blog({ post }) {
  return (
    <div className="blog">
      <Link
        to="/singleBlog"
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <div className="bologImage">
          <img
            src="./assets/brooke-cagle-g1Kr4Ozfoac-unsplash.jpg"
            alt=""
            className="blImage"
          />
        </div>
        <div className="blogText">
          <h3 className="BlogTotle"> {post.title} </h3>
          <div className="description">
            <span className="desc">{post.desc}</span>
          </div>

          <div className="others">
            <Link
              to="/singleBlog"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button>Read More</button>
            </Link>
            <span>owner of the blog</span>
            <span>4-24-2024</span>
          </div>
        </div>
      </Link>
    </div>
  );
}
