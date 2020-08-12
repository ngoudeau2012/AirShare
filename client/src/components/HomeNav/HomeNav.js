import React from "react";
import "./HomeNav.css";
import { Link } from "react-router-dom";
import ContactPage from "../../pages/ContactPage/ContactPage";

function HomeNav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand">
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
          <Link to="/login" className="nav-item nav-link">
         Log In
          </Link>
          <Link to="/meet-team" className="nav-item nav-link">
         Meet the Team
        </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default HomeNav;
