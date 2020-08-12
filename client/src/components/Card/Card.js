import React from "react";
import "./Card.css";

function Card (props) {
  return (
    <div className="animate__animated animate__fadeInUp">
    <div className="card" style={{minHeight: "450px", marginBottom: "30px", border: "20px solid #1b262c"}}>
    <img src={props.image} style={{maxHeight: "250px"}} className="card-img-top" alt={props.idescription}/>
    <div className="card-body">
        <p className="card-text">{props.cardtext}</p>
    </div>
    </div>
    </div>
  );
}

export default Card