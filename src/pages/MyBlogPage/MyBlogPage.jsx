import React from "react";
import "./myblogx.css";
import MyBlog from "../../commponent/myBlog/MyBlog";
import { Link } from "react-router-dom";

export default function MyBlogPage() {
  return (
    <div className="myblogx">
      <div className="searchTab">
        <form action="">
          <input placeholder="Search For Your Blogs....." type="text" />
          <button className="searchButton">Search</button>
        </form>
      </div>
      <div className="myblogxContainer">
        <MyBlog />
        <MyBlog />
        <MyBlog />
        <MyBlog />
      </div>
      <div className="createBlogPage">
        <Link to="/createBlog">
          <button>Create New Blog</button>
        </Link>
      </div>
    </div>
  );
}
