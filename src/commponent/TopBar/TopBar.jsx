import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../AuthContext";

export default function TopBar() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="topbar">
      <div className="topBarContainer">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <div className="TopBarLeft">AFROTECH</div>
        </Link>
        <div className="TopBarRight">
          <div className="LISTS">
            <ul>
              <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
                <li>Home</li>
              </Link>
              <Link
                to="/blogs"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>Blogs</li>
              </Link>
              <Link
                to="/About"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>About</li>
              </Link>
              <Link
                to="/Contact"
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <li>Contact As</li>
              </Link>
              {isLoggedIn ? (
                <Link
                  to="/myblog"
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <li>My Blog</li>
                </Link>
              ) : (
                <div>login</div>
              )}
            </ul>
          </div>
          <div className="buttons">
            <Link
              to="/Signup"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button>Sign UP</button>
            </Link>
            <Link
              to="/Login"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <button>Log In</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
