import React from "react";
import "./ContactPage.css";
import Navbar from "../../components/Navbar/Navbar"
import ContactForm from "../../components/ContactForm/ContactForm"
import Footer from "../../components/Footer/Footer";

function ContactPage() {
    
    const isBackgroundDark = true;
    
    return (

        <div
          style={{
            backgroundColor: isBackgroundDark ? '#3282b8' : 'light',
          }}
        >

        <Navbar/>
        <div style={{color: "white"}}>
          <br></br>
          <h1>Let us know what's up.</h1>
          <br></br>
        </div>
        <ContactForm/>
        <Footer/>

        </div>

    );
}


export default ContactPage;