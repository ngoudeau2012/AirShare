import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import session from "express-session";

function Navbar() {

  const handleLogOut = (e =>{
    sessionStorage.setItem("id", "")
    window.location.href = "/"
  })

  return (
    <div>
      <div></div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/network" className="navbar-brand">
          AirShare
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/Network" className="nav-item nav-link">
              Connections
            </Link>
            <Link to="/profile" className="nav-item nav-link">
              Profile
            </Link>
          </div>
        </div>
        <div className="justify-content-end">
        <Link className="nav-item nav-link" onClick={handleLogOut}>
              Log Out
            </Link>
            <Link to="/sign-up"className="nav-item nav-link">
              Edit Profile
            </Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
