import React from "react";
import "./MeetTeam.css";
import Navbar from "../../components/Navbar/Navbar"
import Footer from "../../components/Footer/Footer";

function MeetTeam() {
    
    const isBackgroundDark = true;
    
    return (

        <div
          style={{
            backgroundColor: isBackgroundDark ? '#1b262c' : 'light',
          }}
        >
        <Navbar/>
 
      
        <Footer/>
        </div>

    );
}


export default MeetTeam;