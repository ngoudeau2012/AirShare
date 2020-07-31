import React from "react";
import "./Welcome.css";

function Welcome() {

    return (
        <div>
          <div></div>
          <div className="jumbotron">
            <h1 className="display-4">Welcome to AirShare!</h1>
             <p className="lead">We're here to help you connect, network, and collaborate with the people you meet.</p>
            <hr className="my-4"/>
            <p>Log in and keep connecting, or click the button below to sign up.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Get Started</a>
            </div>
        </div>
    );
}

export default Welcome;