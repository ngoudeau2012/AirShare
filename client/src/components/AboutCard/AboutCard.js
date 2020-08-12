import React from "react";
import "./AboutCard.css";

function AboutCard (props) {
  return (
    <div className="animate__animated animate__fadeInUp">
    <div className="card" style={{minHeight: "380px", marginBottom: "30px", border: "20px solid #1b262c"}}>
    <img className="card-img-top" src={props.aboutimage} style={{height: "400px", width: "500px"}} alt={props.aboutimagedescription}/>
        <div className="card-body">
        <h5 className="card-title">{props.aboutcardtitle}</h5>
        <p className="card-text">{props.aboutcarddescription}</p>
        <a href={props.aboutlink} target="_blank" className="btn btn-primary">{props.aboutlinkname}</a>
        </div>
    </div>
    </div>
  );
}

export default AboutCard