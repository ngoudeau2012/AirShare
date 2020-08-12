import React from "react";
import "./ContactList.css";
import Navbar from "../../components/Navbar/Navbar"
import ECard from "../../components/ECard/ECard";
import ContactList from "./ContactList.json";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Footer from "../../components/Footer/Footer";
import "../../App.css"

function Contacts() {
    
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
          <Col>
            <ECard
              ecardimage={ContactList[0].ecardimage}
              ecardimagedescription={ContactList[0].ecardimagedescription}
              ecardtitle={ContactList[0].ecardtitle}
              ecarddescription={ContactList[0].ecarddescription}
              ecardlink={ContactList[0].ecardlink}
              ecardlinkname={ContactList[0].ecardlinkname}
            />
          </Col>
          <Col>
            <ECard 
              ecardimage={ContactList[1].ecardimage}
              ecardimagedescription={ContactList[1].ecardimagedescription}
              ecardtitle={ContactList[1].ecardtitle}
              ecarddescription={ContactList[1].ecarddescription}
              ecardlink={ContactList[1].ecardlink}
              ecardlinkname={ContactList[1].ecardlinkname}
            />
          </Col>
          </Row>
          <Row>
          <Col>
            <ECard 
              ecardimage={ContactList[2].ecardimage}
              ecardimagedescription={ContactList[2].ecardimagedescription}
              ecardtitle={ContactList[2].ecardtitle}
              ecarddescription={ContactList[2].ecarddescription}
              ecardlink={ContactList[2].ecardlink}
              ecardlinkname={ContactList[2].ecardlinkname}
            />
          </Col>
          <Col>
            <ECard 
              ecardimage={ContactList[3].ecardimage}
              ecardimagedescription={ContactList[3].ecardimagedescription}
              ecardtitle={ContactList[3].ecardtitle}
              ecarddescription={ContactList[3].ecarddescription}
              ecardlink={ContactList[3].ecardlink}
              ecardlinkname={ContactList[3].ecardlinkname}
            />
          </Col>
        </Row>

      </Container>
      
        <Footer/>
        </div>

    );
}


export default Contacts;