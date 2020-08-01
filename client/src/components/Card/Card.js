import React from "react";
import "./Card.css";

function Card (props) {
  return (
    <div className="card" style={{minHeight: "380px", marginBottom: "30px"}}>
    <img src={props.image} className="card-img-top" alt={props.idescription}/>
    <div className="card-body">
        <p className="card-text">{props.cardtext}</p>
    </div>
    </div>
  );
}

export default Card