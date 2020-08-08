import React from "react";
import "./HomePage.css";
import HomeNav from "../../components/HomeNav/HomeNav";
import Welcome from "../../components/Welcome/Welcome";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import QuoteCard from "../../components/QuoteCard/QuoteCard";
import Card from "../../components/Card/Card";
import aboutus from "./aboutus.json";
import StepCard from "../../components/StepCard/StepCard";
import step from "./step.json";
import Footer from "../../components/Footer/Footer";
import "../../App.css"

function HomePage() {
  const isBackgroundDark = true;

  return (
    <div className="App"
      style={{
        backgroundColor: isBackgroundDark ? "#3282b8" : "light",
      }}
    >
      <HomeNav />
      <Welcome />

      <Container>
        <Row>
          <Col>
            <Card 
              image={aboutus[0].image}
              idescription={aboutus[0].idescription}
              cardtext={aboutus[0].cardtext}
            />
          </Col>
          <Col>
            <Card 
              image={aboutus[1].image}
              idescription={aboutus[1].idescription}
              cardtext={aboutus[1].cardtext}
            />
          </Col>
          <Col>
            <Card 
              image={aboutus[2].image}
              idescription={aboutus[2].idescription}
              cardtext={aboutus[2].cardtext}
            />
          </Col>
        </Row>

      </Container>

      <div style={{color: "white"}}>
          <br></br>
          <h1 style={{border: "10px", borderStyle: "groove", borderColor: "white"}}>How does AirShare work?</h1>
          <br></br>
        </div>

        <Container>
        <Row>
          <Col>
            <StepCard 
              stepimage={step[0].stepimage}
              stepimagedescription={step[0].stepimagedescription}
              stepcardtitle={step[0].stepcardtitle}
              stepcarddescription={step[0].stepcarddescription}
            />
          </Col>
          <Col>
          <StepCard 
              stepimage={step[1].stepimage}
              stepimagedescription={step[1].stepimagedescription}
              stepcardtitle={step[1].stepcardtitle}
              stepcarddescription={step[1].stepcarddescription}
            />
          </Col>
          <Col>
          <StepCard 
              stepimage={step[2].stepimage}
              stepimagedescription={step[2].stepimagedescription}
              stepcardtitle={step[2].stepcardtitle}
              stepcarddescription={step[2].stepcarddescription}
            />
          </Col>
          <Col>
          <StepCard 
              stepimage={step[3].stepimage}
              stepimagedescription={step[3].stepimagedescription}
              stepcardtitle={step[3].stepcardtitle}
              stepcarddescription={step[3].stepcarddescription}
            />
          </Col>
        </Row>

      </Container>

      <QuoteCard />
      <Footer />
    </div>
  );
}

export default HomePage;
