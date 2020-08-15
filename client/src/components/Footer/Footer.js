import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer () {

    return (
        <div className="footer">
          <div></div>
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Thanks for visiting AirShare.</h5>
            <p className="card-text">Still have questions? Contact us below.</p>
            <Link className="footerLink" to="/contact-page" >
         Contact Us
            </Link>
            <Link className="footerLink" to="/meet-team" >
         Meet The Team
            </Link>
        </div>
    </div>
</div>
    )
};

export default Footer;