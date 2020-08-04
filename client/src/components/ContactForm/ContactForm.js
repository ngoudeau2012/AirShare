import React from "react";
import "./ContactForm.css";

function ContactForm () {

    return (
        <div>
         <form action="AirShareGenerational@gmail.com" method="get" enctype="text/plain" style={{marginLeft: "20px", marginRight: "20px"}}>
            <div className="form-group">
                <label for="exampleFormControlInput1" style={{color: "white"}}>Email</label>
                <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlSelect2" style={{color: "white"}}>Subject</label>
                <select multiple className="form-control" id="exampleFormControlSelect2">
                <option>Signing Up</option>
                <option>Logging In</option>
                <option>Making Connections</option>
                <option>What is AirShare?</option>
                <option>Other</option>
                </select>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1" style={{color: "white"}}>Give us some details...</label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                <br></br>
                <input className="btn btn-primary" type="submit" value="Submit"></input>
            </div>
            </form>
        </div>

    )
};

export default ContactForm;