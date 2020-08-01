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
            backgroundColor: isBackgroundDark ? '#1b262c' : 'light',
          }}
        >
        <Navbar/>
        <ContactForm/>
        <Footer/>

        </div>

    );
}


export default ContactPage;