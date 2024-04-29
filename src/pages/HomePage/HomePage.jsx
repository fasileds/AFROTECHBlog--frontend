import React, { useEffect, useState } from "react";
import "./Home.css";
import Blog from "../../commponent/Blog/Blog";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/api/post").then((response) => {
      setPosts(response.data);
    });
  });

  return (
    <div className="homePage">
      <div className="homeContainer">
        <div className="searchTab">
          <form action="">
            <input placeholder="Search For Your Blogs....." type="text" />
            <button className="searchButton">Search</button>
          </form>
        </div>
        <div className="recentBlogs">
          <h1 className="rece">Recent Posts</h1>
          <div className="blogs">
            {posts.map((post) => (
              <Blog key={post.id} post={post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
