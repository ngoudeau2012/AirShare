import React from "react";
import "./Profile.css";
import Navbar from "../../components/Navbar/Navbar"
import ECard from "../../components/ECard/ECard";
import ProfileCard from "../../components/ProfileCard/index"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import "../../App.css"

function UserProfile() {
    
    const isBackgroundDark = true;
    
    return (

        <div
        className= "App"
          style={{
            backgroundColor: isBackgroundDark ? '#3282b8' : 'light',
          }}
        >
        <Navbar/>

        <div style={{color: "white"}}>
          <br></br>
          <h1 style={{border: "10px", borderStyle: "groove", borderColor: "white"}}>Who's In Your Network...</h1>
          <br></br>
        </div>
 
        <Container>
            <Row>
            {/* <ProfileCard 
                    profile={formstate}
                    /> */}
                </Row>

             </Container>
      
        <Footer/>
        </div>
    );
}


export default UserProfile;
