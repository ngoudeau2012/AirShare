import React from "react";
import "./Footer.css";

function Footer () {

    return (
        <div>
          <div></div>
          <div className="card">
            <div className="card-body">
            <h5 className="card-title">Thanks for visiting AirShare.</h5>
            <p className="card-text">Still have questions? Contact us below.</p>
            <Link to="/contact-page" className="btn btn-primary">
         Contact Us
            </Link>
        </div>
    </div>
</div>
    )
};

export default Footer;