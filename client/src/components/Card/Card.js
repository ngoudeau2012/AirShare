import React from "react";
import "./Card.css";

function Card (props) {
  return (
    <div className="animate__animated animate__fadeInUp">
    <div className="card" style={{minHeight: "380px", marginBottom: "30px"}}>
    <img src={props.image} className="card-img-top" alt={props.idescription}/>
    <div className="card-body">
        <p className="card-text">{props.cardtext}</p>
    </div>
    </div>
    </div>
  );
}

export default Card