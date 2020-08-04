import React from "react";
import "./MeetTeam.css";
import Navbar from "../../components/Navbar/Navbar"
import AboutCard from "../../components/AboutCard/AboutCard"
import meetteam from "./meetteam.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";

function MeetTeam() {
    
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
          <h1 style={{border: "10px", borderStyle: "groove", borderColor: "white"}}>Meet our team...</h1>
          <br></br>
        </div>
 
        <Container>
        <Row>
          <Col>
            <AboutCard 
              aboutimage={meetteam[0].aboutimage}
              aboutimagedescription={meetteam[0].aboutimagedescription}
              aboutcardtitle={meetteam[0].aboutcardtitle}
              aboutcarddescription={meetteam[0].aboutcarddescription}
              aboutlink={meetteam[0].aboutlink}
              aboutlinkname={meetteam[0].aboutlinkname}
            />
          </Col>
          <Col>
            <AboutCard 
              aboutimage={meetteam[1].aboutimage}
              aboutimagedescription={meetteam[1].aboutimagedescription}
              aboutcardtitle={meetteam[1].aboutcardtitle}
              aboutcarddescription={meetteam[1].aboutcarddescription}
              aboutlink={meetteam[1].aboutlink}
              aboutlinkname={meetteam[1].aboutlinkname}
            />
          </Col>
          </Row>
          <Row>
          <Col>
            <AboutCard 
              aboutimage={meetteam[2].aboutimage}
              aboutimagedescription={meetteam[2].aboutimagedescription}
              aboutcardtitle={meetteam[2].aboutcardtitle}
              aboutcarddescription={meetteam[2].aboutcarddescription}
              aboutlink={meetteam[2].aboutlink}
              aboutlinkname={meetteam[2].aboutlinkname}
            />
          </Col>
          <Col>
            <AboutCard 
              aboutimage={meetteam[3].aboutimage}
              aboutimagedescription={meetteam[3].aboutimagedescription}
              aboutcardtitle={meetteam[3].aboutcardtitle}
              aboutcarddescription={meetteam[3].aboutcarddescription}
              aboutlink={meetteam[3].aboutlink}
              aboutlinkname={meetteam[3].aboutlinkname}
            />
          </Col>
        </Row>

      </Container>
      
        <Footer/>
        </div>

    );
}


export default MeetTeam;