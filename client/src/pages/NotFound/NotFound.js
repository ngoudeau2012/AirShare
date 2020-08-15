import React from "react";
import {Col, Button, Container} from "react-bootstrap"
import "./notfound.css"

function NotFound() {
  return (
      <div>
        <Container className="notFound" >
        <Col>
          <p >Whoopsies, you seemed to have wondered off the trail</p>
          <Button href="/profile">Return Home</Button>
        </Col>
        </Container>
        
      </div>
      
  );
}

export default NotFound;
