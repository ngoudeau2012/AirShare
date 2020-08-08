import React from "react";
import "./StepCard.css";

function StepCard (props) {
  return (
    <div className="animate__animated animate__fadeInUp">
    <div className="card" style={{minHeight: "380px", marginBottom: "30px"}}>
    <img className="card-img-top" src={props.stepimage} alt={props.stepimagedescription}/>
        <div className="card-body">
        <h5 className="card-title">{props.stepcardtitle}</h5>
        <p className="card-text">{props.stepcarddescription}</p>
        </div>
    </div>
    </div>
  );
}

export default StepCard