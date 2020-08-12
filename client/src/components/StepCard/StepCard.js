import React from "react";
import "./StepCard.css";

function StepCard (props) {
  return (
    <div className="animate__animated animate__fadeInUp">
    <div className="card" style={{maxHeight: "470px", marginBottom: "30px", border: "20px solid #1b262c"}}>
    <img className="card-img-top" style={{height: "210px", width: "215px"}} src={props.stepimage} alt={props.stepimagedescription}/>
        <div className="card-body">
        <h5 className="card-title">{props.stepcardtitle}</h5>
        <p className="card-text">{props.stepcarddescription}</p>
        </div>
    </div>
    </div>
  );
}

export default StepCard